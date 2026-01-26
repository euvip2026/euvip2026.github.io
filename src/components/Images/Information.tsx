export default function Information({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return <img className={className} src={`${basePath}/information.png`} alt="Information Image" />
}
