export default function Program({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return <img className={className} src={`${basePath}/program.png`} alt="Program Image" />
}
