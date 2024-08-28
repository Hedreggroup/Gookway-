'use client';
import React, { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    // Check if we're in the browser (client-side)
    if (typeof window !== 'undefined') {
      // Get item from localStorage
      const storageItem = localStorage.getItem(key);
      if (storageItem) {
        setValue(JSON.parse(storageItem) as T);
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
    }
  }, [key, initialValue]);

  useEffect(() => {
    // Update localStorage whenever value changes, but only in the browser
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}
