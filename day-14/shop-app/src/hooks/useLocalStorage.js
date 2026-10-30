import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);

      return savedValue !== null
        ? JSON.parse(savedValue)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  function updateValue(newValue) {
    setValue((previousValue) => {
      const valueToStore =
        typeof newValue === "function"
          ? newValue(previousValue)
          : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));

      return valueToStore;
    });
  }

  return [value, updateValue];
}

export default useLocalStorage;