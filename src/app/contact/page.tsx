import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/contact.png`} alt="Contact Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Contact</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>
      <div className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="mt-4">
            <p className="text-container-foreground mb-6 text-lg opacity-80">
              Have a question or need more information? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
