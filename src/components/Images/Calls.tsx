export default function Calls({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return <img className={className} src={`${basePath}/calls.png`} alt="Calls Image" />
}
