import React from "react";

interface FormErrorProps {
  message: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return (
    <div className="animate-fade-in-down mt-2 rounded-lg bg-red-600 p-3 text-sm text-white shadow-lg">
      <span role="img" aria-label="error" className="mr-2">
        ❌
      </span>
      {message}
    </div>
  );
};

export default FormError;
