import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sponsors',
  alternates: { canonical: '/sponsors/' },
}

const packages = [
  {
    title: 'PLATINUM PACKAGE',
    price: '10.000€',
    bgColor: 'bg-[#f7fbfc]',
    imageSrc: '/sponsors-platinum.png',
    imageAlt: 'Platinum Package Crown Icon',
    features: [
      'Top logo placement on the Conference website sponsors page (first-listed Platinum Sponsor)',
      'Top logo placement in all pre-conference e-blasts and promotional materials',
      'Top logo placement in the Conference Program',
      'Logo displayed on keynote and plenary session opening and closing slides',
      'Logo and special mention included in post-conference communications',
      'Special mention on Best Paper Award certificates',
      'Opportunity to include company promotional items in the Conference bag',
      'Acknowledgment by the Chair during the Opening Session, Closing Session, and Gala Dinner',
      'Invitation to nominate a representative to participate in the Conference panel discussion session (Chair-approved)',
      '250-word corporate profile on the Conference website (with hyperlink)',
      '250-word corporate profile in the Conference Program',
      'Full double-page advertisement in the Conference Program',
      'Complimentary premium large exhibition booth (5 units) with first-priority placement',
      '5 complimentary full delegate registrations, including access to all sessions, coffee breaks, lunches, Welcome Reception, and Conference Dinner',
    ],
  },
  {
    title: 'GOLD PACKAGE',
    price: '5.000€',
    bgColor: 'bg-[#fcfaf2]',
    imageSrc: '/sponsors-gold.png',
    imageAlt: 'Gold Package Trophy Icon',
    features: [
      'Logo placement on the Conference website sponsors page (first-listed Gold Sponsor)',
      'Logo placement in all pre-conference e-blasts and promotional materials',
      'Logo placement in the Conference Program',
      'Logo displayed on keynote and plenary session opening and closing slides',
      'Logo included in post-conference communications',
      'Opportunity to include company promotional items in the Conference bag',
      'Acknowledgment by the Chair during the Opening Session and Closing Session',
      'Invitation to nominate a representative to participate in the Conference panel discussion session (Chair-approved)',
      '150-word corporate profile on the Conference website (with hyperlink)',
      '150-word corporate profile in the Conference Program',
      'Full page advertisement in the Conference Program',
      'Complimentary premium exhibition booth (3 units) with second-priority placement',
      '3 complimentary full delegate registrations, including access to all sessions, coffee breaks, lunches, Welcome Reception, and Conference Dinner',
    ],
  },
  {
    title: 'SILVER PACKAGE',
    price: '3.000€',
    bgColor: 'bg-[#f6f6f6]',
    imageSrc: '/sponsors-silver.png',
    imageAlt: 'Silver Package Mermaid Icon',
    features: [
      'Logo placement on the Conference website sponsors page (first-listed Silver Sponsor)',
      'Logo placement in the Conference Program',
      'Acknowledgment by the Chair during the Closing Session',
      '100-word corporate profile on the Conference website',
      '100-word corporate profile in the Conference Program',
      'Half page advertisement in the Conference Program',
      'Complimentary exhibition booth (2 units) with third-priority placement',
      '2 complimentary full delegate registrations, including access to all sessions, coffee breaks, lunches, Welcome Reception, and Conference Dinner',
    ],
  },
  {
    title: 'BRONZE PACKAGE',
    price: '1.500€',
    bgColor: 'bg-[#ede4d9]',
    imageSrc: '/sponsors-bronze.png',
    imageAlt: 'Bronze Package Horse Icon',
    features: [
      'Logo placement on the Conference website sponsors page (first-listed Bronze Sponsor)',
      'Logo placement in the Conference Program',
      '75-word corporate profile on the Conference website',
      '75-word corporate profile in the Conference Program',
      'Quarter page advertisement in the Conference Program',
      'Complimentary exhibition booth (1 unit) with fourth-priority placement',
      '1 complimentary full delegate registration, including access to all sessions, coffee breaks, lunches, Welcome Reception, and Conference Dinner',
    ],
  },
]

interface PackageSectionProps {
  title: string
  price: string
  bgColor: string
  features: string[]
  imageSrc: string
  imageAlt: string
}

function PackageSection({ title, price, bgColor, features, imageSrc, imageAlt }: PackageSectionProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <section className={`relative w-full overflow-hidden ${bgColor}`}>
      <div className="mx-auto max-w-7xl py-12 md:px-4 lg:py-16">
        {/* Header Tab */}
        <div className="relative z-10 mb-6 flex min-h-[90px] w-[90%] max-w-[500px] items-center gap-4 rounded-r-[100px] bg-[#2f566e] py-3 pr-8 pl-4 font-['Roboto',sans-serif] text-white shadow-md sm:w-[80%] sm:pl-8 md:w-[65%] lg:mb-8 lg:w-[45%]">
          {/* Header Icon */}
          <div className="flex h-14 w-14 items-center justify-center md:h-20 md:w-20">
            <img
              src={`${basePath}${imageSrc}`}
              alt=""
              className="h-full w-full object-contain opacity-90"
              style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-lg leading-tight font-semibold tracking-wide uppercase sm:text-xl md:text-2xl lg:text-[28px]">
              {title}
            </h2>
            <p className="mt-1 text-lg leading-tight font-bold opacity-90 sm:text-xl md:text-2xl lg:text-[28px]">
              {price}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-8 px-6 sm:px-12 md:px-20 lg:grid-cols-3 lg:px-24">
          {/* Left Column: Features List */}
          <div className="font-['Roboto',sans-serif] text-sm leading-relaxed text-[#2f566e] md:text-base lg:col-span-2">
            <ul className="list-disc space-y-2 pl-5 marker:text-[#2f566e]">
              {features.map((feature, index) => (
                <li key={index} className="pl-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image */}
          <div
            className="relative min-h-[300px] bg-contain bg-center bg-no-repeat lg:bg-right"
            style={{ backgroundImage: `url(${basePath}${imageSrc})` }}
            role="img"
            aria-label={imageAlt}
          />
        </div>
      </div>
    </section>
  )
}

export default function SponsorsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/sponsors-hero.png`} alt="Sponsors Hero Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Sponsors</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        {packages.map((pkg) => (
          <PackageSection
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            bgColor={pkg.bgColor}
            features={pkg.features}
            imageSrc={pkg.imageSrc}
            imageAlt={pkg.imageAlt}
          />
        ))}
      </main>
    </>
  )
}
