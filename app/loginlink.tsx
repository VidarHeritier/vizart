import Link from "@/node_modules/next/link";

import React from "react";

const Button = () => {
  return (
    <div>
      <Link
        href="/login"
        className="rounded-[2px] py-1 px-2 text-blue-900 bg-amber-100"
      >
        Join
      </Link>
    </div>
  );
};

export default Button;
