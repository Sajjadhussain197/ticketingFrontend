import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image src="/images/mainlogo.svg" alt="Logo" width={281} height={37} />
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</Link>
        <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link href="#faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link>
        <Link href="#about-us" className="text-gray-600 hover:text-gray-900">About us</Link>
        <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#F81A84] to-[#2200F3]">
          Get Started
        </span>
      </nav>
    </header>
  )
}