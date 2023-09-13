//useLocalstorage.ts

import { useEffect, useState } from 'react';

export default function (key: string, defaultValue: unknown) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (err) {
      return String(defaultValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
