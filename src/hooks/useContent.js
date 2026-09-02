import { useState, useEffect } from 'react';
import { getContent, subscribeContent } from '../lib/contentStore';

export function useContent() {
  const [content, setContent] = useState(getContent);

  useEffect(() => {
    const unsubscribe = subscribeContent((updated) => setContent(updated));
    return unsubscribe;
  }, []);

  return content;
}
