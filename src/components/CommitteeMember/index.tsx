'use client'

import Image from 'next/image'
import React from 'react'

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
  const handleImageClick = () => {
    if (cvLink && cvLink.trim() !== '') {
      window.open(cvLink, '_blank', 'noopener,noreferrer')
    }
  }

  // Check if image is external URL
  const isExternalImage = imageUrl.startsWith('http://') || imageUrl.startsWith('https://')

  return (
    <div className="flex flex-col items-center p-4 text-center">
      {/* Circular Image */}
      <div
        className={`relative mb-4 h-32 w-32 overflow-hidden rounded-full transition-transform hover:scale-105 hover:shadow-lg ${
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
          <Image src={imageUrl} alt={`${firstName} ${lastName}`} fill className="object-cover" sizes="128px" />
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
