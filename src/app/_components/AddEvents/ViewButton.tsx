import Link from "next/link";
import React from "react";

const ViewButton = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link href={url} passHref>
      <div className="block bg-white px-4 py-2 text-sm text-black">{label}</div>
    </Link>
  );
};

export default ViewButton;
