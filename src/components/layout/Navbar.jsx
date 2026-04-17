'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, BarChart3, Users } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Timeline', href: '/timeline', icon: Calendar },
    { name: 'Stats', href: '/stats', icon: BarChart3 },
  ]

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl gap-2">
          <Users className="h-6 w-6 text-primary" />
          Keen<span className="text-primary">Keeper</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          const Icon = link.icon

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`btn btn-ghost gap-2 ${
                isActive ? 'bg-primary text-primary-content' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              {link.name}
            </Link>
          )
        })}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md p-4 flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`btn btn-ghost justify-start gap-2 ${
                  isActive ? 'bg-primary text-primary-content' : ''
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}