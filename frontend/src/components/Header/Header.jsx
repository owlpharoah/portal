import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-600" />
          <h1 className="text-xl font-bold tracking-wide">
            KAVALA
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/alumni">Alumni</Link>
          <Link href="/memories">Memories</Link>
          <Link href="/about">About Us</Link>
        </div>
      </nav>
    </header>
  );
}