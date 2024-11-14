'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next';
import { signOut, useSession } from 'next-auth/react'
const languages = [
  { code: 'en', name: 'English(UK)', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export default function Header() {
  const [currentLang, setCurrentLang] = useState(languages[0])
  const [isHelpCenterOpen, setIsHelpCenterOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { data: session } = useSession();

  // Dummy function to simulate language change
  const changeLanguage = (lang: any) => {
    setCurrentLang(lang);
    console.log(`Language changed to: ${lang.name}`);
  }

  return (
    <header className="w-full text-white bg-[#000033]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-sm focus:outline-none"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <span><img src="/images/flag/uk.svg" className='h-6 w-6' alt="" /></span>
                <span>{currentLang.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                      onClick={() => changeLanguage(lang)}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-sm focus:outline-none"
                onClick={() => setIsHelpCenterOpen(!isHelpCenterOpen)}
              >
                <span>Help Center</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isHelpCenterOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg z-50">
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-white/90 text-sm focus:outline-none">
            Find Events</a>
            <a href="#" className="text-white hover:text-white/90 text-sm focus:outline-none">
            Create Events
            </a>
            <Link href="/auth/signup" className="rounded-sm flex items-center bg-[#FF1988]
            hover:bg-[#FF1988]/90 text-white h-8 px-4 text-sm focus:outline-none">
                Register
            </Link>
            {session ? (
              <button
                onClick={() => signOut()}
                className="flex items-center bg-white text-black h-8 px-4 text-center
                rounded-sm text-sm items-center focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="flex items-center bg-white text-black h-8 px-4 text-center
                rounded-sm text-sm items-center focus:outline-none"
              >
                Login
              </Link>
            )}
            <a href="#" className="flex items-center bg-white text-black h-8 px-4 text-center
              rounded-sm text-sm items-center focus:outline-none">
                For customer</a>
          </div>
        </nav>
      </div>
    </header>
  )
}