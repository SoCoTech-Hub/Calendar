import Link from "next/link";


const ViewButton = ({
  label,
  url,
  onClick,
  className
}: {
  label: string;
  url?: string;
    onClick?: () => void;
  className?:string
}) => {
  return onClick ? (
    <button
      onClick={onClick}
      className={className?className:"block bg-white px-4 py-2 text-sm text-black"}
    >
      {label}
    </button>
  ) : (
    <Link href={url ? url : "/"} className={className?className:"block bg-white px-4 py-2 text-sm text-black"} passHref>
      {label}
    </Link>
  );
};

export default ViewButton;
