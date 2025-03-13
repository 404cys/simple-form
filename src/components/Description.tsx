"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { TextareaProps } from "@/types/FormTypes";
import { nonEmptyString, maxLengthString } from "@/utils/ZodUtils";  

export default function AutoResizeTextarea({ label, id, errorMsg, maxLength, ...props }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState<string>("");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
     try {
      nonEmptyString.parse(newValue); 
      if (maxLength) {
        maxLengthString(maxLength).parse(newValue);  
      }
      setValidationError("");  
    } catch (err: any) {
      setValidationError(err.errors[0].message);  
    }

    setValue(newValue);
  };

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        ref={textareaRef}
        {...props}
        value={value}
        onChange={handleChange}   
        placeholder=" " 
        className={cn(
          "peer w-full px-4 py-3 text-gray-900 border rounded-xl shadow-sm transition-all resize-none",
          "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400",
          "hover:border-gray-400 outline-none",
          "placeholder-transparent text-sm",  
          errorMsg || validationError ? "border-red-500 focus:border-red-500" : "border-gray-300"
        )}
        rows={1}
      />

      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm px-1 transition-all",
          "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400",
          "peer-focus:top-1 peer-focus:-translate-y-1/2 peer-focus:text-blue-500 peer-focus:text-xs"
        )}
      >
        {label}
      </label>

      {validationError && <p className="text-red-500 mt-1 text-sm">{validationError}</p>}
      {errorMsg && <p className="text-red-500 mt-1 text-sm">{errorMsg}</p>}
    </div>
  );
}
