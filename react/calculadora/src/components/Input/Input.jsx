import { useState } from "react";

export default function Input({ value, onChange }) {
  return (
    <div className="w-full h-[100px] bg-gray-800 flex items-center justify-end text-4xl font-mono text-white">
      <input
        value={value} 
        onChange={onChange} 
        className="w-full h-[100px] border-0 text-right px-4 bg-transparent"
      />
    </div>
  );
}
