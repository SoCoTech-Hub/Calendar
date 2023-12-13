import React from "react";
import Link from "next/link";

interface ViewButtonProps {
  url: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

const ViewButton: React.FC<ViewButtonProps> = ({
  url,
  label,
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={url} passHref>
      <button
        onClick={handleClick}
        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${className}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default ViewButton;
