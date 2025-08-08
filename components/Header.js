import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaInstagram } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="py-4 px-6 shadow-md bg-[var(--background)]">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold hover:text-purple-600 transition text-[var(--foreground)]">
          Tolu ADESANYA
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tdkayy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition text-[var(--foreground)]"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tolu-adesanya-4521772b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition text-[var(--foreground)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:toluadesanya@myyahoo.com"
            className="hover:text-purple-600 transition text-[var(--foreground)]"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <Link
            href="https://www.instagram.com/toluadesanyaa/"
            className="hover:text-purple-600 transition text-[var(--foreground)]"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  )
}
