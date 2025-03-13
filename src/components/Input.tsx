"use client";
import { useState, useEffect } from "react";
import { inputProps } from "@/types/FormTypes";
import { cn } from "@/utils/cn";
import { nonEmptyString, emailString, numberString } from "@/utils/ZodUtils"; 

export default function Input({
  label,
  id,
  errorMsg,
  placeholder,
  ...props
}: inputProps) {
  const [storedValue, setStoredValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const value = sessionStorage.getItem(id);
    if (value) {
      setStoredValue(value);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setStoredValue(newValue);

     let validationError = "";
    if (id === "name") {
      try {
        nonEmptyString.parse(newValue);
        setError("");  
      } catch (err: any) {
        validationError = err.errors[0]?.message || "Invalid input";
      }
    } else if (id === "email") {
      try {
        emailString.parse(newValue);
        setError("");
      } catch (err: any) {
        validationError = err.errors[0]?.message || "Invalid input";
      }
    } else if (id === "phone") {
      try {
        numberString.parse(newValue);
        setError("");
      } catch (err: any) {
        validationError = err.errors[0]?.message || "Invalid input";
      }
    }

    setError(validationError);  
    sessionStorage.setItem(id, newValue);
  };

  return (
    <div className="relative">
      <input
        id={id}
        placeholder={placeholder}
        value={storedValue}
        onChange={handleChange}
        {...props}
        className={cn(
          "w-full px-4 py-3 text-gray-700 text-sm border rounded-lg shadow-sm transition-all duration-300 ease-in-out peer",
          "border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50",
          "hover:border-gray-400",
          error && "border-red-500 focus:border-red-500",  
          "bg-transparent"
        )}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 text-amber-50 text-sm bg-black px-1 transition-all opacity-0",
            "peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-blue-500 peer-focus:text-xs",
            "peer-placeholder-shown:opacity-0"
          )}
        >
          {label}
        </label>
      )}
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}  
    </div>
  );
}
