// CardFooter.tsx
import React from "react";

interface CardFooterProps {
  children: React.ReactNode;
  className?: string; // Custom classes for styling
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
