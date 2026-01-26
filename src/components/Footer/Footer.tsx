export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-muted bg-background text-container-foreground w-full border-t">
      <div className="mx-auto flex min-h-[88px] max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:py-0 sm:text-left">
        <p className="text-sm font-semibold tracking-tight">EUVIP 2026 · Luxembourg</p>
        <p className="text-sm opacity-70">© {year} EUVIP. All rights reserved.</p>
      </div>
    </footer>
  )
}
