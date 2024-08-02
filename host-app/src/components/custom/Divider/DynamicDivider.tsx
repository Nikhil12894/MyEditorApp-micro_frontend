import React from "react";

interface DynamicDividerProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  borderClassName?: string;
}

const DynamicDivider: React.FC<DynamicDividerProps> = ({
  text,
  icon,
  className,
  borderClassName,
}) => {
  return (
    <div className={`relative flex py-5 items-center ${className}`}>
      <div
        className={`flex-grow ${borderClassName || "border-t border-cyan-400"}`}
      ></div>
      <span className="flex-shrink mx-4 text-cyan-400 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </span>
      <div
        className={`flex-grow ${borderClassName || "border-t border-cyan-400"}`}
      ></div>
    </div>
  );
};

export default DynamicDivider;
