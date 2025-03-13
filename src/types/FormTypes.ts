import { ChangeEvent } from "react";

export interface FormData {
    name: string;
    email: string;
    description: string;
    image: File | null;
    url: string;
  }
  
  export interface inputProps  {
    label: string;  
    id: string;
    description?: string;
    required?: boolean;  
    pattern?: string;
    minLength?: number;
    min?: number;
    max?: number;
    value? : string ;
    errorMsg?: string;
    type : string;
    placeholder? : string ;
    icon?:File | null ;
    onChange? : (event: ChangeEvent<HTMLInputElement>)=> void  ; 
    
  }
  export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    errorMsg?: string;
  }