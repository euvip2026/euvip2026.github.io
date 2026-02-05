'use client'

import Image from 'next/image'

interface SpeakerProps {
  name: string
  affiliation: string
  description: string
  country?: string
  imageUrl: string
  talkTitle?: string
  profileUrl?: string
}

export default function Speaker({
  name,
  affiliation,
  description,
  country,
  imageUrl,
  talkTitle,
  profileUrl,
}: SpeakerProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  // Check if image is external URL
  const isExternalImage = imageUrl.startsWith('http://') || imageUrl.startsWith('https://')
  const localPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`
  const srcWithBasePath = `${basePath}${localPath}`

  return (
    <div className="bg-background text-container-foreground flex w-full flex-col gap-6 rounded-xs border border-gray-200 p-6 shadow-sm md:flex-row">
      {/* Left side - Picture section (1/4) */}
      <div className="flex flex-col items-center md:w-1/4">
        {/* Image */}
        <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-md shadow-sm md:h-40 md:w-40">
          {isExternalImage ? (
            <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <Image src={srcWithBasePath} alt={name} fill className="object-cover" sizes="160px" />
          )}
        </div>

        {/* Name */}
        <a href={profileUrl ?? ''} target="_blank" rel="noopener noreferrer">
          <h3 className="mb-1 text-center text-lg font-semibold hover:underline">{name}</h3>
        </a>
        {/* Affiliation */}
        <p className="text-center text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: affiliation }} />
        <p className="text-center text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />

        {/* Country (if provided) */}
        {country && <p className="text-center text-sm text-gray-600">{country}</p>}
      </div>

      {/* Right side - Content section (3/4) */}
      <div className="flex flex-1 flex-col justify-center md:w-3/4">
        {/* Talk Title (if provided) */}
        {talkTitle ? (
          <>
            <h4 className="mb-4 text-xl font-bold md:text-2xl">{talkTitle}</h4>

            {/* Read more button (inactive) */}
            {/* <button
              type="button"
              disabled
              className="border-muted bg-background/50 text-muted-foreground w-fit cursor-not-allowed rounded-sm border px-4 py-2 text-sm font-semibold opacity-50 transition"
              aria-label="Read more about this topic"
            >
              Read more
            </button> */}
          </>
        ) : (
          <div className="text-lg text-gray-500 italic">Talk title to be announced.</div>
        )}
      </div>
    </div>
  )
}
