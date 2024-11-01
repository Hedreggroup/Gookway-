import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      // console.log("TYPE OF SAVED VALUE", typeof savedValue, savedValue);

      // Check if savedValue is non-null and non-empty before parsing
      if (savedValue) {
        try {
          return JSON.parse(savedValue) as T;
        } catch (error) {
          console.error("Error parsing JSON from localStorage:", error);
          return initialValue;
        }
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}
