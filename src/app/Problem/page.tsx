"use client"
import { useState } from "react";
import AutoResizeTextarea from "@/components/Description";
import UploadImage from "@/components/UploadImage";
import SubmitButton from "@/components/SubmitBotton";

export default function ProblemSection() {
  const [problem, setProblem] = useState("");

  const isValid = problem.trim() !== ""; 

  return (
    <form action="" className="max-w-md mx-auto my-50 p-2 gap-y-6 rounded-lg">
      <div className="grid grid-cols-1">
        <AutoResizeTextarea 
          id="problem"
          label="Write Your Problem"
          value={problem}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProblem(e.target.value)}
        />
      </div>
      
      <UploadImage />

       <div className="mt-4">
        <SubmitButton isValid={isValid} />
      </div>
    </form>
  );
}
