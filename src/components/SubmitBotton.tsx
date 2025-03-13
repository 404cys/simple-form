import React, { useState } from "react";
import { z } from "zod";
import { nonEmptyString } from "@/utils/ZodUtils";  

function SubmitButton({ isValid }: { isValid: boolean }) {
 
  return (
    <button
      type="submit"
      disabled={!isValid}  
      className={`w-full py-2 px-4 ${
        isValid
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-400 cursor-not-allowed"
      } text-white font-semibold rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      {isValid ? "Submit" : "Submit"}  
    </button>
  );
}

export default SubmitButton;
