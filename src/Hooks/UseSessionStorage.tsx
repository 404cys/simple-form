import { useState, useEffect } from "react";

function useSessionStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValueState] = useState<string>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.error("Error reading sessionStorage", error);
      return initialValue;
    }
  });

  const setStoredValue = (value: string) => {
    try {
      setStoredValueState(value);  
      sessionStorage.setItem(key, value);   
    } catch (error) {
      console.error("Error setting sessionStorage", error);
    }
  };

  return [storedValue, setStoredValue];   
}

export { useSessionStorage };
