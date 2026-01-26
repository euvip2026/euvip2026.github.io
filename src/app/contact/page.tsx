import { Contact } from '@/components/Images'

export default function ContactPage() {
  return (
    <>
      <Contact className="mx-auto w-full px-6 md:px-8" />
      <div className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 py-8 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">General Information</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-container-foreground text-base text-lg leading-relaxed">
              <a href="mailto:cvi2@gmail.com" className="hover:text-accent underline transition-colors">
                cvi2@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
