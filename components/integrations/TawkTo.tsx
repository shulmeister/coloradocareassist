import { useEffect } from 'react';

export default function TawkTo() {
  const tawkEnabled = process.env.NEXT_PUBLIC_TAWK_ENABLED === 'true';
  const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

  useEffect(() => {
    if (!tawkEnabled || !tawkPropertyId || !tawkWidgetId) {
      return;
    }

    // Check if Tawk script is already loaded
    if ((window as any).Tawk_API) {
      return;
    }

    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Add script to document
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup function
    return () => {
      // Remove Tawk widget on unmount
      const tawkWidget = document.getElementById('tawk-bubble');
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, [tawkEnabled, tawkPropertyId, tawkWidgetId]);

  return null;
}

