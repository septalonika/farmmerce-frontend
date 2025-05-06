// CardHeader.tsx
import React from "react";

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string; // Custom classes for styling
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
