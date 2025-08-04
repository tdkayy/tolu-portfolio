import Link from 'next/link'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        {/* Left: Name/Logo */}
        <Link href="/" className="text-xl font-bold">
          Tolu ADESANYA
        </Link>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tdkayy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tolu-adesanya-4521772b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <Link
            href="/about"
            className="text-gray-600 hover:text-purple-600 transition"
            aria-label="About"
          >
            <FaUser size={20} />
          </Link>
        </div>
      </nav>
    </header>
  )
}