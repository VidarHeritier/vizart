import React from "react";
import Link from "@/node_modules/next/link";

export default function Button() {
  return (
    <Link
      href="/login"
      className="rounded-[2px] py-1 px-2 text-blue-900 bg-amber-100"
    >
      Join
    </Link>
  );
}
