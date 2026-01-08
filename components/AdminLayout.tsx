import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUser from '@/lib/useUser';
import styles from '@/styles/Admin.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, mutateUser } = useUser({
    redirectTo: '/admin/login',
  });
  const router = useRouter();

  if (!user || !user.isLoggedIn) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    await fetch('/api/logout');
    mutateUser(await fetch('/api/user').then(res => res.json()));
    router.push('/admin/login');
  };

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.sidebarTitle}>CareAssist Admin</h1>
        </div>
        <nav className={styles.nav}>
          <Link 
            href="/admin/dashboard" 
            className={`${styles.navLink} ${router.pathname === '/admin/dashboard' ? styles.activeLink : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/admin/contacts" 
            className={`${styles.navLink} ${router.pathname === '/admin/contacts' ? styles.activeLink : ''}`}
          >
            Contacts
          </Link>
          <Link 
            href="/admin/posts" 
            className={`${styles.navLink} ${router.pathname.startsWith('/admin/posts') ? styles.activeLink : ''}`}
          >
            Blog Posts
          </Link>
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
