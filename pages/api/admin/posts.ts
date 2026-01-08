import { Octokit } from 'octokit';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';

export default withIronSessionApiRoute(async function handler(req, res) {
  if (!req.session.user || !req.session.user.admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { method } = req;
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const owner = process.env.GITHUB_REPO_OWNER!;
  const repo = process.env.GITHUB_REPO_NAME!;

  if (method === 'GET') {
    // List posts (fetch from _posts directory)
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: '_posts',
      });

      if (!Array.isArray(data)) {
        return res.status(500).json({ message: 'Unexpected response from GitHub' });
      }

      // Filter for markdown files and get basic details
      const posts = data
        .filter((file: any) => file.name.endsWith('.md'))
        .map((file: any) => ({
          name: file.name,
          path: file.path,
          sha: file.sha,
          download_url: file.download_url
        }));

      return res.json(posts);
    } catch (error: any) {
      console.error('GitHub API Error:', error);
      return res.status(500).json({ message: error.message });
    }
  }

  if (method === 'POST') {
    // Create new post
    const { title, date, author, excerpt, content, slug } = req.body;
    
    // Construct frontmatter and content
    const fileContent = `---
title: '${title.replace(/'/g, "''")}'
date: '${date}'
author: '${author}'
excerpt: '${excerpt.replace(/'/g, "''")}'
---

${content}
`;

    // Encode to Base64
    const contentEncoded = Buffer.from(fileContent).toString('base64');
    const path = `_posts/${slug}.md`;

    try {
      await octokit.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message: `CMS: Create post ${title}`,
        content: contentEncoded,
      });

      return res.json({ success: true, path });
    } catch (error: any) {
      console.error('GitHub API Error:', error);
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}, sessionOptions);
