import { useEffect, useState } from 'react';

export const useOnline = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const updateOnline = () => setIsOnline(true);
    const updateOffline = () => setIsOnline(false);

    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOffline);

    return () => {
      window.removeEventListener('online', updateOnline);
      window.removeEventListener('offline', updateOffline);
    };
  }, []);

  return isOnline;
};
