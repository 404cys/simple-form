"use client";
import { useEffect, useState } from "react";
import SubmitButton from "@/components/SubmitBotton";
export default function SendSection() {
  const [storedData, setStoredData] = useState<{ [key: string]: string }>({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const image = sessionStorage.getItem("image");
    const report = sessionStorage.getItem("report");

    const newData = {
      name: name || "",
      email: email || "",
      phone: phone || "",
      image: image || "",
      report: report || "",
    };

    setStoredData(newData);

     setIsValid(!!newData.name || !!newData.email || !!newData.phone);
  }, []);

  return (
    <div className="bg-black flex justify-center pl-52 mt-16">
      <div className="w-full max-w-4xl p-8 rounded-xl shadow-lg ">
        <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">Details Of Report</h2>
        <table className="table-auto w-full text-gray-600 border-collapse">
          
          <tbody>
            {Object.entries(storedData).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="px-6 py-4 font-semibold">{key}</td>
                <td className="px-6 py-4">
                  {key === "image" && value ? (
                    <img
                      src={value}
                      alt="Stored"
                      className="w-32 h-32 object-cover rounded-lg mx-auto"
                    />
                  ) : (
                    <span>{value || "Not Available!"}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 text-center">
          <SubmitButton isValid={isValid} />
        </div>
      </div>
    </div>
  );
}
