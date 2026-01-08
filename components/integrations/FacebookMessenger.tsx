import { useEffect } from 'react';

export default function FacebookMessenger() {
  const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;

  useEffect(() => {
    if (!pageId) return;

    // Initialize Facebook SDK
    const initFacebook = () => {
      const fbRoot = document.getElementById('fb-root');
      if (!fbRoot) {
        const div = document.createElement('div');
        div.id = 'fb-root';
        document.body.appendChild(div);
      }

      const fbCustomerChat = document.getElementById('fb-customer-chat');
      if (!fbCustomerChat) {
        const div = document.createElement('div');
        div.id = 'fb-customer-chat';
        div.className = 'fb-customerchat';
        div.setAttribute('attribution', 'biz_inbox');
        div.setAttribute('page_id', pageId);
        document.body.appendChild(div);
      }

      (window as any).fbAsyncInit = function() {
        (window as any).FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement; 
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        if (fjs && fjs.parentNode) {
            fjs.parentNode.insertBefore(js, fjs);
        } else {
            document.head.appendChild(js);
        }
      }(document, 'script', 'facebook-jssdk'));
    };

    // Delay slightly to prioritize core content
    const timer = setTimeout(initFacebook, 2000);

    return () => clearTimeout(timer);
  }, [pageId]);

  if (!pageId) return null;

  return null;
}
