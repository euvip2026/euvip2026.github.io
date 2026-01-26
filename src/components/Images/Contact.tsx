export default function Contact({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return <img className={className} src={`${basePath}/contact.png`} alt="Contact Image" />
}
