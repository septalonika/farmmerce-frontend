// Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Custom classes for styling
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};
