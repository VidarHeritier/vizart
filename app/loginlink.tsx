import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/login/login"
      className="rounded-[2px] py-1 px-2 text-blue-900 bg-amber-100"
    >
      Jump In
    </Link>
  );
}
