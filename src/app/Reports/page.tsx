import AutoResizeTextarea from "@/components/Description";
import Input from "@/components/Input";
import UploadImage from "@/components/UploadImage";

export default function ReportsSection() {
  return (
    <form action="" className="max-w-md mx-auto my-50 p-4  rounded-lg">
      <div className=" grid grid-cols-1 gap-3">
        <Input
         label="Object"
         placeholder="Object" 
         id="report" 
         errorMsg="" 
         type="" /> 
       <AutoResizeTextarea label="Write"/> 
       <UploadImage /> 
      </div>
    </form>
  );
}
