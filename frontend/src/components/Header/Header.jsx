import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold">
            K
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              KAVALA
            </h1>


          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <NavLink href="/alumnis">
            Alumnis
          </NavLink>

          <NavLink href="/memories">
            Memories
          </NavLink>

          <NavLink href="/about">
            About Us
          </NavLink>
        </nav>

      </div>
    </header>
  );
}