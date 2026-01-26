export default function AnnouncedSoon({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return <img className={className} src={`${basePath}/announced-soon.png`} alt="Announced Soon Image" />
}
