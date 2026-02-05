'use client'

import Image from 'next/image'
import { useId, useMemo, useState } from 'react'

function stripHtmlToText(html: string): string {
  // Keep basic spacing for common block separators before stripping tags.
  const withSpacing = html
    .replace(/<\s*br\s*\/?\s*>/gi, ' ')
    .replace(/<\s*\/\s*p\s*>/gi, ' ')
    .replace(/<\s*\/\s*div\s*>/gi, ' ')

  const noTags = withSpacing.replace(/<[^>]*>/g, '')

  return (
    noTags
      // Common named entities
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      // Numeric entities
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
      .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
      .replace(/\s+/g, ' ')
      .trim()
  )
}

interface SpeakerProps {
  name: string
  affiliation: string
  description: string
  country?: string
  imageUrl: string
  talkTitle?: string
  talkAbstract?: string
  profileUrl?: string
  bio?: string
}

export default function Speaker({
  name,
  affiliation,
  description,
  country,
  imageUrl,
  talkTitle,
  talkAbstract,
  profileUrl,
  bio,
}: SpeakerProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const bioId = useId()
  const [isBioExpanded, setIsBioExpanded] = useState(false)

  const { bioHtml, bioPreview, shouldTruncateBio } = useMemo(() => {
    const BIO_PREVIEW_CHARS = 260
    const html = (bio ?? '').trim()
    const plain = stripHtmlToText(html)

    if (!plain) {
      return { bioHtml: '', bioPreview: '', shouldTruncateBio: false }
    }

    if (plain.length <= BIO_PREVIEW_CHARS) {
      return { bioHtml: html, bioPreview: plain, shouldTruncateBio: false }
    }

    const sliced = plain.slice(0, BIO_PREVIEW_CHARS)
    // Avoid ending mid-word if possible
    const trimmedToWordBoundary = sliced.replace(/\s+\S*$/, '').trim()
    const preview = `${trimmedToWordBoundary || sliced}…`

    return { bioHtml: html, bioPreview: preview, shouldTruncateBio: true }
  }, [bio])

  const abstractId = useId()
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false)

  const { abstractFull, abstractPreview, shouldTruncateAbstract } = useMemo(() => {
    const ABSTRACT_PREVIEW_CHARS = 360
    const full = (talkAbstract ?? '').trim().replace(/\s+/g, ' ')

    if (!full) {
      return { abstractFull: '', abstractPreview: '', shouldTruncateAbstract: false }
    }

    if (full.length <= ABSTRACT_PREVIEW_CHARS) {
      return { abstractFull: full, abstractPreview: full, shouldTruncateAbstract: false }
    }

    const sliced = full.slice(0, ABSTRACT_PREVIEW_CHARS)
    const trimmedToWordBoundary = sliced.replace(/\s+\S*$/, '').trim()
    const preview = `${trimmedToWordBoundary || sliced}…`

    return { abstractFull: full, abstractPreview: preview, shouldTruncateAbstract: true }
  }, [talkAbstract])

  // Check if image is external URL
  const isExternalImage = imageUrl.startsWith('http://') || imageUrl.startsWith('https://')
  const localPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`
  const srcWithBasePath = `${basePath}${localPath}`

  return (
    <div className="bg-container text-container-foreground flex w-full flex-col gap-6 rounded-xs border border-gray-200 p-6 shadow-sm md:flex-row">
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
            <h3 className="mb-1 text-xl font-bold md:text-2xl">Biography</h3>

            {bioPreview ? (
              <>
                {isBioExpanded ? (
                  <div
                    id={bioId}
                    className="text-container-foreground/70 text-md"
                    dangerouslySetInnerHTML={{ __html: bioHtml }}
                  />
                ) : (
                  <p id={bioId} className="text-container-foreground/70 text-md">
                    {bioPreview}
                  </p>
                )}

                {shouldTruncateBio ? (
                  <button
                    type="button"
                    onClick={() => setIsBioExpanded((v) => !v)}
                    aria-expanded={isBioExpanded}
                    aria-controls={bioId}
                    className="text-container-foreground/80 mt-2 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-sm py-1 text-sm font-semibold transition hover:bg-gray-50"
                  >
                    <span>{isBioExpanded ? 'Show less' : 'Show more'}</span>
                    {isBioExpanded ? (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M14.78 12.53a.75.75 0 0 1-1.06.25L10 10.06 6.28 12.78a.75.75 0 0 1-.88-1.22l4.15-3.05a.75.75 0 0 1 .88 0l4.15 3.05a.75.75 0 0 1 .25 1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.47a.75.75 0 0 1 1.06-.25L10 9.94l3.72-2.72a.75.75 0 1 1 .88 1.22l-4.15 3.05a.75.75 0 0 1-.88 0L5.4 8.53a.75.75 0 0 1-.18-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ) : null}
              </>
            ) : null}

            <h3 className="mt-6 mb-1 text-xl font-bold md:text-2xl">{talkTitle}</h3>
            {abstractPreview ? (
              <>
                <p id={abstractId} className="text-container-foreground/70 text-md">
                  {isAbstractExpanded ? abstractFull : abstractPreview}
                </p>
                {shouldTruncateAbstract ? (
                  <button
                    type="button"
                    onClick={() => setIsAbstractExpanded((v) => !v)}
                    aria-expanded={isAbstractExpanded}
                    aria-controls={abstractId}
                    className="text-container-foreground/80 mt-2 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-sm py-1 text-sm font-semibold transition hover:bg-gray-50"
                  >
                    <span>{isAbstractExpanded ? 'Show less' : 'Show more'}</span>
                    {isAbstractExpanded ? (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M14.78 12.53a.75.75 0 0 1-1.06.25L10 10.06 6.28 12.78a.75.75 0 0 1-.88-1.22l4.15-3.05a.75.75 0 0 1 .88 0l4.15 3.05a.75.75 0 0 1 .25 1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.47a.75.75 0 0 1 1.06-.25L10 9.94l3.72-2.72a.75.75 0 1 1 .88 1.22l-4.15 3.05a.75.75 0 0 1-.88 0L5.4 8.53a.75.75 0 0 1-.18-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ) : null}
              </>
            ) : null}

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
