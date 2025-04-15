// src/components/Analytics.jsx
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Create script tag
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=GG-YLLNW1LD6B"; // Replace with your real ID
    script.async = true;
    document.head.appendChild(script);

    // Inject gtag config
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-YLLNW1LD6B"); // Replace with your real ID
  }, []);

  return null; // No UI
};

export default GoogleAnalytics;
