'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/Dropdown'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const NAV_ITEMS = [
  { href: '/', label: 'HOME' },
  { href: '/committee', label: 'COMMITTEE' },
  { href: '/calls', label: 'CALLS' },
  { href: '/program', label: 'PROGRAM' },
  { href: '/logistics', label: 'LOGISTICS' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/sponsors', label: 'SPONSORS' },
  { href: '/awards', label: 'AWARDS' },
] as const

const INFORMATION_ITEMS = [
  { href: '/information/important-dates', label: 'IMPORTANT DATES' },
  { href: '/information/paper-kit-guidelines', label: 'PAPER KIT & GUIDELINES' },
  { href: '/information/paper-submission', label: 'PAPER SUBMISSION' },
  { href: '/information/project-dissemination', label: 'PROJECT DISSEMINATION' },
  { href: '/information/student-session', label: 'STUDENT SESSION' },
] as const

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isInformationActive = pathname.startsWith('/information')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileInformationOpen, setMobileInformationOpen] = useState(false)
  const [desktopInformationOpen, setDesktopInformationOpen] = useState(false)
  const desktopInfoCloseTimeoutRef = useRef<number | null>(null)

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
    setMobileInformationOpen(false)
    setDesktopInformationOpen(false)
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

    // On some mobile browsers, backdrop-filter on the header can interfere with fixed-position children.
    // Keep blur for desktop only.
    return `${base} border-muted bg-background/85 text-container-foreground lg:backdrop-blur-md`
  }, [isHome, isScrolled])

  const navLinkClassName = (isActive: boolean) =>
    `flex h-full items-center border-b-2 pt-2 pb-2 transition-colors ${
      isActive ? 'border-current font-bold' : 'border-transparent hover:border-current/70'
    }`

  const cancelDesktopInfoClose = () => {
    if (desktopInfoCloseTimeoutRef.current == null) return
    window.clearTimeout(desktopInfoCloseTimeoutRef.current)
    desktopInfoCloseTimeoutRef.current = null
  }

  const scheduleDesktopInfoClose = () => {
    cancelDesktopInfoClose()
    desktopInfoCloseTimeoutRef.current = window.setTimeout(() => {
      setDesktopInformationOpen(false)
    }, 120)
  }

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <Link href="/">
          <Image
            src={`${basePath}/logo.png`}
            alt="Logo"
            width={100}
            height={100}
            className={isHome && !isScrolled ? 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]' : undefined}
          />
        </Link>
        <nav className="hidden h-[81px] items-center gap-8 text-sm font-medium lg:flex">
          <Link href="/" className={navLinkClassName(pathname === '/')}>
            HOME
          </Link>
          <Link href="/committee" className={navLinkClassName(pathname.includes('/committee'))}>
            COMMITTEE
          </Link>
          <Link href="/calls" className={navLinkClassName(pathname.includes('/calls'))}>
            CALLS
          </Link>

          <DropdownMenu open={desktopInformationOpen} onOpenChange={setDesktopInformationOpen} modal={false}>
            <DropdownMenuTrigger
              className={`${navLinkClassName(isInformationActive)} gap-2 outline-none data-[state=open]:border-current`}
              onMouseEnter={() => {
                cancelDesktopInfoClose()
                setDesktopInformationOpen(true)
              }}
              onMouseLeave={scheduleDesktopInfoClose}
            >
              INFORMATION FOR AUTHORS
              <ChevronDown className="h-4 w-4 opacity-80" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="border-muted bg-background/95 text-container-foreground min-w-[280px] p-2 shadow-lg backdrop-blur-md"
              onMouseEnter={cancelDesktopInfoClose}
              onMouseLeave={scheduleDesktopInfoClose}
            >
              {INFORMATION_ITEMS.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="focus:bg-container focus:text-container-foreground rounded-xl px-3 py-2 text-sm font-medium"
                >
                  <Link href={item.href} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/program" className={navLinkClassName(pathname.includes('/program'))}>
            PROGRAM
          </Link>
          <Link href="/logistics" className={navLinkClassName(pathname.includes('/logistics'))}>
            LOGISTICS
          </Link>
          <Link href="/contact" className={navLinkClassName(pathname.includes('/contact'))}>
            CONTACT
          </Link>
          <Link href="/sponsors" className={navLinkClassName(pathname.includes('/sponsors'))}>
            SPONSORS
          </Link>
          <Link href="/awards" className={navLinkClassName(pathname.includes('/awards'))}>
            AWARDS
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-current/15 bg-black/0 lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="text-container-foreground fixed inset-0 z-9999 bg-white">
          <div className="flex min-h-[81px] items-center justify-between px-6">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src={`${basePath}/logo.png`} alt="Logo" width={100} height={100} />
            </Link>
            <button
              type="button"
              className="border-muted inline-flex h-10 w-10 items-center justify-center rounded-xs border"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-6 pt-8">
            <ul className="flex flex-col gap-6 text-xl font-extrabold sm:text-2xl">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={pathname === '/' ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/committee"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/committee') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  COMMITTEE
                </Link>
              </li>
              <li>
                <Link
                  href="/calls"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/calls') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  CALLS
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between ${
                    isInformationActive ? 'text-accent-foreground' : 'text-container-foreground'
                  }`}
                  aria-expanded={mobileInformationOpen}
                  onClick={() => setMobileInformationOpen((v) => !v)}
                >
                  INFORMATION FOR AUTHORS
                  <ChevronDown
                    className={`h-6 w-6 transition-transform ${mobileInformationOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileInformationOpen ? (
                  <ul className="mt-4 flex flex-col gap-3 pl-4 text-sm font-semibold sm:text-base">
                    {INFORMATION_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={pathname === item.href ? 'text-accent-foreground' : 'text-container-foreground'}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              <li>
                <Link
                  href="/program"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/program') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  PROGRAM
                </Link>
              </li>
              <li>
                <Link
                  href="/logistics"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/logistics') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  LOGISTICS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/contact') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/sponsors') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  SPONSORS
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  onClick={() => setMobileOpen(false)}
                  className={pathname.includes('/awards') ? 'text-accent-foreground' : 'text-container-foreground'}
                >
                  AWARDS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
