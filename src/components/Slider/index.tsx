'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/utils'

type SliderProps = {
  className?: string
  images?: string[]
  autoPlayMs?: number
}

const DEFAULT_IMAGES = [
  '1-KACHEN.jpeg',
  '2-LFF.jpg',
  '3-LFF.jpg',
  '4-LMIH Focalize.jpg',
  '5-Passion Meets Creativity.jpg',
  '6-Sabino Parente.jpg',
  '7-Sabino Parente.jpg',
  '8-Sabino Parente.jpg',
  '9-Sabino Parente.jpg',
  '10-Sabino Parente.jpg',
  '11-Sabino Parente.jpg',
  '12-Sabino Parente.jpg',
  '13-Sabino Parente.jpg',
  '14-Sabino Parente.jpg',
  '15-Sabino Parente.jpg',
  '16-Sabino Parente.jpg',
]

function getCreditFromFilename(filename: string) {
  const withoutExt = filename.replace(/\.[^/.]+$/, '')
  return withoutExt.replace(/^\d+\s*[-_]\s*/, '').trim()
}

export default function Slider({ className, images = DEFAULT_IMAGES, autoPlayMs = 6000 }: SliderProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const [index, setIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  const count = images.length
  const safeIndex = ((index % count) + count) % count
  const current = images[safeIndex]
  const credit = getCreditFromFilename(current)

  const goPrev = React.useCallback(() => setIndex((i) => i - 1), [])
  const goNext = React.useCallback(() => setIndex((i) => i + 1), [])

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  React.useEffect(() => {
    if (autoPlayMs <= 0) return
    if (isPaused) return

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    if (reduceMotion) return

    const id = window.setInterval(goNext, autoPlayMs)
    return () => window.clearInterval(id)
  }, [autoPlayMs, goNext, isPaused])

  if (count === 0) return null

  return (
    <div
      className={cn('mt-10', className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image slider"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="border-muted bg-background relative overflow-hidden border shadow-sm">
        <div className="aspect-video w-full">
          <img
            className="h-full w-full object-cover"
            src={`${basePath}/slider/${encodeURIComponent(current)}`}
            alt={`EUVIP 2026 image ${safeIndex + 1}`}
            loading="lazy"
          />
        </div>

        {credit.length > 0 && (
          <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            © {credit}
          </div>
        )}

        <button
          type="button"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur transition hover:cursor-pointer hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur transition hover:cursor-pointer hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          onClick={goNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="absolute right-3 bottom-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          {safeIndex + 1}/{count}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {images.map((_, i) => {
          const isActive = i === safeIndex
          return (
            <button
              key={i}
              type="button"
              className={cn(
                'h-2.5 w-2.5 rounded-full transition hover:cursor-pointer',
                isActive ? 'bg-accent' : 'bg-muted hover:bg-muted/80',
              )}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={isActive ? 'true' : undefined}
            />
          )
        })}
      </div>
    </div>
  )
}
