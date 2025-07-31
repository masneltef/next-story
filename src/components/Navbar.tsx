'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/timeline', label: 'Timeline' },
  ]

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            NextStory
          </Link>
          
          {/* Navigation Links + Theme Toggle */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  pathname === item.href 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Add the theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}