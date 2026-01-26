import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges CSS class names using clsx and tailwind-merge
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns A merged string of CSS classes with Tailwind conflicts resolved
 *
 * @example
 * cn("px-2 py-1", "px-4") // "py-1 px-4" (px-2 is overridden by px-4)
 * cn("text-red-500", { "text-blue-500": true }) // "text-blue-500"
 * cn("bg-white", ["text-black", { "font-bold": true }]) // "bg-white text-black font-bold"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets the current date formatted according to the specified locale
 * @param locale - The locale string (e.g., 'en-US', 'fr-FR', 'de-DE')
 * @returns A formatted date string with full weekday, month, day, and year
 *
 * @example
 * getCurrentDate('en-US') // "Monday, September 29, 2025"
 * getCurrentDate('fr-FR') // "lundi 29 septembre 2025"
 * getCurrentDate('de-DE') // "Montag, 29. September 2025"
 */
export function getCurrentDate(locale: string) {
  return new Date().toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Gets a greeting message based on the current time of day
 * @returns A greeting string appropriate for the current hour
 *
 * @example
 * getCurrentTimeOfDay() // "Good Morning" (if called before 12:00)
 * getCurrentTimeOfDay() // "Good Afternoon" (if called between 12:00-17:59)
 * getCurrentTimeOfDay() // "Good Evening" (if called after 18:00)
 */
export function getCurrentTimeOfDay() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  else if (hour < 18) return 'Good Afternoon'
  else return 'Good Evening'
}
