import React from "react";

interface CustomButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  label: string;
  className?: string; // Custom classes for styling
  icon?: React.ReactNode; // Optional icon if you need one
  variant?: "primary" | "secondary" | "danger"; // Add variants for different button styles
  size?: "small" | "medium" | "large"; // Button size
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  disabled = false,
  loading = false,
  label,
  className = "",
  icon,
  variant = "primary",
  size = "medium",
}) => {
  const getButtonClass = () => {
    // Default button styles based on variant and size
    const baseClasses =
      "rounded-lg font-bold text-white shadow-md transition-all duration-300 transform cursor-pointer";
    const sizeClasses = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      primary: "bg-green-500 hover:bg-green-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
      danger: "bg-red-500 hover:bg-red-600",
      neutral: "bg-gray-500 hover:bg-gray-600",
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={getButtonClass()}
    >
      {loading ? (
        <span className="animate-spin">Loading...</span> // Loading spinner or icon
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>} {/* Optional Icon */}
          {label}
        </>
      )}
    </button>
  );
};

export default CustomButton;
