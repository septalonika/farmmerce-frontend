import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="mt-2 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white shadow-sm transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-green-500 focus:outline-none"
        placeholder={placeholder}
      />
      {error && (
        <div className="mt-1 animate-pulse text-sm text-red-400">
          <span role="img" aria-label="warning" className="mr-2">
            ⚠️
          </span>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
