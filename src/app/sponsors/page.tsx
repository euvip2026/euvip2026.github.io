import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sponsors',
  alternates: { canonical: '/sponsors/' },
}

// TODO: replace the placeholder `href: '#'` values with each sponsor's website.
const sponsorTiers = [
  {
    tier: 'PLATINUM',
    bgColor: 'bg-[#f7fbfc]',
    iconSrc: '/sponsors-platinum.png',
    logoHeight: 'h-32 md:h-40',
    columns: 'grid-cols-1 sm:grid-cols-2',
    sponsors: [
      { name: 'FNR', imageSrc: '/sponsors/platinum/1-fnr.png', href: 'https://www.fnr.lu/' },
      { name: 'University of Luxembourg', imageSrc: '/sponsors/platinum/2-unilu.png', href: 'https://www.uni.lu/' },
    ],
  },
  {
    tier: 'GOLD',
    bgColor: 'bg-[#fcfaf2]',
    iconSrc: '/sponsors-gold.png',
    logoHeight: 'h-24 md:h-32',
    columns: 'grid-cols-1 sm:grid-cols-2',
    sponsors: [
      { name: 'Google', imageSrc: '/sponsors/gold/1-google.png', href: 'https://about.google/' },
      { name: 'Deep by POST', imageSrc: '/sponsors/gold/2-deep-post.png', href: 'https://www.deep.eu/' },
    ],
  },
  {
    tier: 'SILVER',
    bgColor: 'bg-[#f6f6f6]',
    iconSrc: '/sponsors-silver.png',
    logoHeight: 'h-20 md:h-24',
    columns: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    sponsors: [
      { name: 'Incode', imageSrc: '/sponsors/silver/1-incode.png', href: 'https://www.incode.com/' },
      { name: 'LuxProvide MeluXina', imageSrc: '/sponsors/silver/2-luxprovide-meluxina.png', href: 'https://www.luxprovide.lu/' },
      { name: 'IEE', imageSrc: '/sponsors/silver/3-iee.png', href: 'https://www.iee-sensing.com/' },
    ],
  },
  {
    tier: 'BRONZE',
    bgColor: 'bg-[#ede4d9]',
    iconSrc: '/sponsors-bronze.png',
    logoHeight: 'h-16 md:h-20',
    columns: 'grid-cols-1 sm:grid-cols-2',
    sponsors: [
      { name: 'Luxembourg Convention Centre', imageSrc: '/sponsors/bronze/1-lux-convention-center.png', href: 'https://luxembourg-convention-bureau.lu/en' },
      { name: 'The Dots Luxembourg', imageSrc: '/sponsors/bronze/2-the-dots.png', href: 'https://thedots.lu/' },
    ],
  },
  {
    tier: 'TECHNICAL',
    bgColor: 'bg-white',
    iconSrc: '/sponsors-logo.png',
    logoHeight: 'h-16 md:h-20',
    columns: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    sponsors: [
      { name: 'EURASIP', imageSrc: '/sponsors/technical/1-eurasip.png', href: '#' },
      { name: 'IEEE', imageSrc: '/sponsors/technical/2-ieee.png', href: '#' },
      { name: 'IEEE Student Branch', imageSrc: '/sponsors/technical/3-ieee-students.jpeg', href: '#' },
      { name: 'IEEE Sensors', imageSrc: '/sponsors/technical/4-ieee.webp', href: '#' },
      { name: 'IEEE Signal Processing Society', imageSrc: '/sponsors/technical/5-ieee-signal-processing.png', href: '#' },
    ],
  },
]

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
      'Logo displayed on keynote and keynote session opening and closing slides',
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
      'Logo displayed on keynote and keynote session opening and closing slides',
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

interface SponsorTierSectionProps {
  tier: string
  bgColor: string
  iconSrc: string
  logoHeight: string
  columns: string
  sponsors: { name: string; imageSrc: string; href: string }[]
}

function SponsorTierSection({ tier, bgColor, iconSrc, logoHeight, columns, sponsors }: SponsorTierSectionProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <section className={`relative w-full overflow-hidden ${bgColor}`}>
      <div className="mx-auto max-w-7xl py-10 md:px-4 lg:py-12">
        {/* Header Tab */}
        <div className="relative z-10 mb-6 flex min-h-[90px] w-[90%] max-w-[500px] items-center gap-4 rounded-r-[100px] bg-[#2f566e] py-3 pr-8 pl-4 font-['Roboto',sans-serif] text-white shadow-md sm:w-[80%] sm:pl-8 md:w-[65%] lg:mb-8 lg:w-[70%]">
          {/* Header Icon */}
          <div className="flex h-12 w-12 items-center justify-center md:h-20 md:w-20">
            <img
              src={`${basePath}${iconSrc}`}
              alt=""
              className="h-full w-full object-contain opacity-90"
              style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
            />
          </div>

          <h2 className="text-lg leading-tight font-semibold tracking-wide uppercase sm:text-xl md:text-2xl lg:text-[28px]">
            {tier}
          </h2>
        </div>

        <ul className={`grid items-center gap-6 px-6 sm:px-12 md:px-20 lg:px-0 ${columns}`}>
          {sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <a
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                title={sponsor.name}
                className="flex h-full items-center justify-center bg-white p-6 shadow-sm transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#2f566e] focus-visible:outline-none"
              >
                <img
                  src={`${basePath}${sponsor.imageSrc}`}
                  alt={`${sponsor.name} logo`}
                  className={`w-full ${logoHeight} object-contain`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

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
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left Section: Header + Features */}
          <div className="lg:col-span-2">
            {/* Header Tab */}
            <div className="relative z-10 mb-6 flex min-h-[90px] w-[90%] max-w-[500px] items-center gap-4 rounded-r-[100px] bg-[#2f566e] py-3 pr-8 pl-4 font-['Roboto',sans-serif] text-white shadow-md sm:w-[80%] sm:pl-8 md:w-[65%] lg:mb-8 lg:w-[70%]">
              {/* Header Icon */}
              <div className="flex h-12 w-12 items-center justify-center md:h-20 md:w-20">
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
                <p className="mt-1 leading-tight opacity-90">
                <span className="text-lg font-bold sm:text-xl md:text-2xl lg:text-[28px]">
                  {price.replace(/\s*\(excl\. VAT\)$/, '')}
                </span>

                <span className="ml-2 text-xs font-normal sm:text-sm md:text-base">
                  (excl. VAT)
                </span>
              </p>
              </div>
            </div>

            {/* Features List */}
            <div className="px-6 font-['Roboto',sans-serif] text-sm leading-relaxed text-[#2f566e] sm:px-12 md:px-20 md:text-base lg:px-0">
              <ul className="list-disc marker:text-[#2f566e] lg:pl-10">
                {features.map((feature, index) => (
                  <li key={index} className="pl-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Image spanning full height */}
          <div className="lg:col-span-1">
            <div
              className="relative aspect-square bg-contain bg-center bg-no-repeat lg:bg-top"
              style={{ backgroundImage: `url(${basePath}${imageSrc})` }}
              role="img"
              aria-label={imageAlt}
            />
          </div>
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
        {sponsorTiers.map((tier) => (
          <SponsorTierSection
            key={tier.tier}
            tier={tier.tier}
            bgColor={tier.bgColor}
            iconSrc={tier.iconSrc}
            logoHeight={tier.logoHeight}
            columns={tier.columns}
            sponsors={tier.sponsors}
          />
        ))}

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
