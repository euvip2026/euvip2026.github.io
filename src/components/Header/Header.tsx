'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const NAV_ITEMS = [
  { href: '/', label: 'HOME' },
  { href: '/committee', label: 'COMMITTEE' },
  { href: '/information', label: 'INFORMATION FOR AUTHORS' },
  { href: '/program', label: 'PROGRAM' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/sponsors', label: 'SPONSORS' },
  { href: '/awards', label: 'AWARDS' },
] as const

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true)
      return
    }

    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const headerClassName = useMemo(() => {
    const base =
      'fixed top-0 right-0 left-0 z-900 flex min-h-[81px] items-center border-b transition-colors duration-300'

    if (isHome && !isScrolled) {
      return `${base} border-transparent bg-black/40 text-white`
    }

    return `${base} border-muted bg-background/85 text-container-foreground backdrop-blur-md`
  }, [isHome, isScrolled])

  const navLinkClassName = (isActive: boolean) =>
    `flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
      isActive ? 'border-current font-bold' : 'border-transparent hover:border-current/70'
    }`

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/">
          <Image
            src={`${basePath}/logo.png`}
            alt="Logo"
            width={100}
            height={100}
            className={isHome && !isScrolled ? 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]' : undefined}
          />
        </Link>
        <nav className="hidden h-[81px] items-center gap-8 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClassName(pathname === item.href || (item.href !== '/' && pathname.includes(item.href)))}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-current/15 bg-black/0 md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-1000 bg-background text-container-foreground">
          <div className="flex min-h-[81px] items-center justify-between px-6">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src={`${basePath}/logo.png`} alt="Logo" width={100} height={100} />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-muted"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-6 pt-8">
            <ul className="flex flex-col gap-6 text-2xl font-extrabold">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.includes(item.href))
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={isActive ? 'text-accent-foreground' : 'text-container-foreground'}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
