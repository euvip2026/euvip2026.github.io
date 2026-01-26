'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/Dropdown'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Header() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className="bg-background fixed top-0 right-0 left-0 z-900 flex min-h-[81px] items-center border-b border-gray-100">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
        <Link href="/">
          <Image src={`${basePath}/logo.png`} alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-12">
          <nav className="text-container-foreground flex h-[81px] items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname === '/' ? 'border-container-foreground font-bold' : 'border-transparent hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              href="/committee"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/committee')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Committee
            </Link>
            <Link
              href="/information"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/information')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Information for authors
            </Link>
            <Link
              href="/program"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/program')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Program
            </Link>
            <Link
              href="/contact"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/contact')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/sponsors"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/sponsors')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Sponsors
            </Link>
            <Link
              href="/awards"
              className={`flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
                pathname.includes('/awards')
                  ? 'border-container-foreground font-bold'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Awards
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
