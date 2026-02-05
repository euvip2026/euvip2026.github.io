const DEFAULT_SITE_URL = 'https://euvip2026.github.io'

function normalizeOrigin(input: string): string {
  const trimmed = input.trim()
  if (!trimmed) return DEFAULT_SITE_URL

  // Allow passing "example.com" without scheme.
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
    return `https://${trimmed}`
  }

  return trimmed
}

export function getSiteOrigin(): string {
  // Prefer explicit configuration.
  const configured = process.env.NEXT_PUBLIC_SITE_URL
  if (configured) return normalizeOrigin(configured)

  // Fall back to GitHub Pages default for this repo.
  return DEFAULT_SITE_URL
}

export function getMetadataBase(): URL {
  return new URL(getSiteOrigin())
}

export function withBasePath(pathname: string): string {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim()
  const normalizedBase =
    basePath && basePath !== '/'
      ? basePath.startsWith('/')
        ? basePath.replace(/\/+$/, '')
        : `/${basePath.replace(/\/+$/, '')}`
      : ''

  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const joined = `${normalizedBase}${normalizedPath}`.replace(/\/{2,}/g, '/')
  return joined || '/'
}

export function absoluteUrl(pathname: string): string {
  return new URL(withBasePath(pathname), getMetadataBase()).toString()
}

