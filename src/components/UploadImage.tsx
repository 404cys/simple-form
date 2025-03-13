"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { storeImageInSessionStorage, getImageFromSessionStorage, removeImageFromSessionStorage } from "@/utils/sessionStorageUtils";

const imageValidation = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "Please upload a valid image file.",
  })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "Image size must be less than 5MB.",
  });

export default function UploadImage() {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const storedImage = getImageFromSessionStorage();
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        imageValidation.parse(file);
        setImage(file);
        storeImageInSessionStorage(file);
        setError("");
      } catch (err: any) {
        setError(err.errors[0].message);
      }
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    removeImageFromSessionStorage();
  };

  return (
    <div className="relative w-full">
      {image ? (
        <div className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-10 h-64">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="max-w-full h-auto rounded-lg"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white text-2xl p-2 rounded-full cursor-pointer transition hover:bg-red-600"
          >
            ×
          </button>
        </div>
      ) : (
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-8 h-56 cursor-pointer    transition"
        >
          <span className="text-gray-600 font-semibold">
            📂 Drag & drop an image, or click to select
          </span>
        </label>
      )}

      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
}
