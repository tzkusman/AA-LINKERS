'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'INVENTORY', href: '/products' },
    { name: 'ABOUT', href: '/about' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 bg-white border-b border-slate-200 px-6 md:px-8 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center space-x-2 shrink-0">
        <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase hidden sm:inline-block">
          A.A Linkers
        </span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`transition-colors hover:text-blue-700 ${pathname === link.href ? 'text-blue-700' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block shrink-0">
        <Link href="/contact" className="bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all">
          Request Quote
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 text-slate-900">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col space-y-6 md:hidden z-40 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-semibold uppercase tracking-wider ${pathname === link.href ? 'text-blue-700' : 'text-slate-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-blue-700 text-white px-5 py-3 rounded-full text-sm font-bold mt-4"
          >
            Request Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
