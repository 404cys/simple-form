"use client"
import { useState } from "react";
import Input from "@/components/Input";
import SubmitButton from "@/components/SubmitBotton";

export default function AboutSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isValid = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form action="" className="max-w-md mx-auto my-50 p-4 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <Input
          label="Name"
          id="name"
          type="text"
          required
          placeholder="Enter your name"
          onChange={handleChange}  
          value={formData.name} 
        />
        <Input
          label="Email"
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          label="Phone"
          id="phone"
          type="phone"
          required
          placeholder="Enter your Phone Number"
          onChange={handleChange}
          value={formData.phone}
        />
        <SubmitButton isValid={isValid} />  
      </div>
    </form>
  );
}
