import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DEFAULTS } from '../../utils/constants';

export default function SEO({ title, description, keywords }) {
  const location = useLocation();
  const fullTitle = title ? `${title} | JMJ Solutions` : SEO_DEFAULTS.title;
  const desc = description || SEO_DEFAULTS.description;
  const url = `${SEO_DEFAULTS.url}${location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;
    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', desc);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', fullTitle);
    setMeta('og:description', desc);
    setMeta('og:url', url);
    setMeta('og:type', 'website');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:url', url);
  }, [fullTitle, desc, keywords, url]);

  return null;
}
