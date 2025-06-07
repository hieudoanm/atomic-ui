export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;

  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return null;
  }
};

export const removeLocalStorage = (key: string): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

export const LocalStorage = () => {
  return { set: setLocalStorage, get: getLocalStorage, remove: removeLocalStorage, clear: clearLocalStorage };
};
