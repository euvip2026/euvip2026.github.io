'use client'

import Image from 'next/image'

interface CommitteeMemberProps {
  firstName: string
  lastName: string
  organization: string
  country: string
  imageUrl: string
  cvLink: string
}

export default function CommitteeMember({
  firstName,
  lastName,
  organization,
  country,
  imageUrl,
  cvLink,
}: CommitteeMemberProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const handleImageClick = () => {
    if (cvLink && cvLink.trim() !== '') {
      window.open(cvLink, '_blank', 'noopener,noreferrer')
    }
  }

  // Check if image is external URL
  const isExternalImage = imageUrl.startsWith('http://') || imageUrl.startsWith('https://')
  const localPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`
  const srcWithBasePath = `${basePath}${localPath}`

  return (
    <div className="flex flex-col items-center p-4 text-center">
      {/* Image */}
      <div
        className={`relative mb-4 h-36 w-36 overflow-hidden rounded-md shadow-sm inset-shadow-sm transition-transform hover:scale-105 hover:shadow-lg md:h-40 md:w-40 ${
          cvLink && cvLink.trim() !== '' ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={handleImageClick}
        role={cvLink && cvLink.trim() !== '' ? 'button' : undefined}
        tabIndex={cvLink && cvLink.trim() !== '' ? 0 : undefined}
        onKeyDown={
          cvLink && cvLink.trim() !== ''
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleImageClick()
                }
              }
            : undefined
        }
        aria-label={cvLink && cvLink.trim() !== '' ? `View CV of ${firstName} ${lastName}` : `${firstName} ${lastName}`}
      >
        {isExternalImage ? (
          // Use regular img for external URLs (or configure next.config.ts with image domains)
          <img src={imageUrl} alt={`${firstName} ${lastName}`} className="h-full w-full object-cover" />
        ) : (
          // Use Next.js Image for local images
          <Image src={srcWithBasePath} alt={`${firstName} ${lastName}`} fill className="object-cover" sizes="128px" />
        )}
      </div>

      {/* Name */}
      <h3 className="mb-1 text-lg font-semibold">
        {firstName} {lastName}
      </h3>

      {/* Organization */}
      <p className="text-sm text-gray-600">{organization}</p>

      {/* Country */}
      <p className="text-sm text-gray-600">{country}</p>
    </div>
  )
}
