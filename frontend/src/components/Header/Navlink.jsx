import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        text-gray-700
        font-medium
        transition-all
        duration-200
        hover:text-green-600
      "
    >
      {children}
    </Link>
  );
}