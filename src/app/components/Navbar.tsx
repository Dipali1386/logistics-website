'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center space-x-10 py-4 shadow bg-white text-gray-800">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-lg font-semibold hover:text-blue-600 pb-1 ${
              isActive ? 'border-b-4 border-blue-600 text-blue-600' : ''
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
