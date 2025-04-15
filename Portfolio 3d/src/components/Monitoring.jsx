import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const GOOGLE_ANALYTICS_ID = 'G-YLLNW1LD6B';

export function Monitoring() {
  useEffect(() => {
    // Inject Google Analytics script
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ANALYTICS_ID}');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
