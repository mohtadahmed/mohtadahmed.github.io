import { useEffect } from 'react';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · Mohtad Ahmed` : 'Mohtad Ahmed — Software Engineer & EEE Researcher';
  }, [title]);
}
