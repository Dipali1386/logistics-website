'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const linkStyle = (path: string) =>
    pathname === path
      ? 'text-blue-600 dark:text-white font-semibold underline underline-offset-4'
      : 'hover:underline text-gray-700 dark:text-gray-300'

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="object-contain rounded-full"
        />
        <span className="text-xl font-bold text-blue-600 dark:text-white">
          Logistics & Transport
        </span>
      </Link>

      <nav className="space-x-6 text-sm md:text-base">
        <Link href="/" className={linkStyle('/')}>
          Home
        </Link>
        <Link href="/services" className={linkStyle('/services')}>
          Services
        </Link>
        <Link href="/about" className={linkStyle('/about')}>
          About
        </Link>
        <Link href="/contact" className={linkStyle('/contact')}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
