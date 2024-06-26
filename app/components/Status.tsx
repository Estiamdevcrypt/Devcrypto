import React from "react";

interface Props {
  label: string;
  value: string;
}

export default function Status({ label, value }: Props) {
  return (
    <div className="flex items-center">
      <p className="flex-1 text-sm text-white-400">{label}</p>
      <p className="font-semibold text-white-500">{value}</p>
    </div>
  );
}