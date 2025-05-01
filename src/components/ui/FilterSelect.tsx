import React from "react";

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
  return (
    <select
      className="rounded-full border px-4 py-2 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
