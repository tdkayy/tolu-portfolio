import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          [Tolu ADESANYA].dev
        </Link>
        <a
          href="https://github.com/tdkayy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}
