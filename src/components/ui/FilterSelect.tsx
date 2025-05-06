import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type FilterSelectProps = {
  placeholder: string;
  options: Option[];
  onChange?: (value: string) => void;
};

export const FilterSelect: React.FC<FilterSelectProps> = ({
  placeholder,
  options,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <select
        title="Filter"
        className="cursor-pointer appearance-none rounded-full border px-4 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
        <svg
          className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
