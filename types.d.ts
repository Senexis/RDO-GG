export interface Toast { id: string, name: string, url: string }
export type ToastsResponse = Record<string, Toast[] | Record<string, Toast[]>>

export interface Location { id: string, name: string, url: string }
export type LocationResponse = Record<string, Location[]>

export interface TierLimit { count: number, max: number }
export interface Tier { amount_cents: number, title: string, description: string, url: string, image_url: string, limit: TierLimit | null }
export interface PatronsResponse { patrons: string[], tiers: Tier[] }

export interface TranslationLanguage { id: string, name: string, native: string, discord: string, font: string, progress: number, translators: Record<string, number> }
export interface TranslationsResponse { languages: TranslationLanguage[] }
