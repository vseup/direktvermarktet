import { z } from 'zod'

export const Countries = [
    'GERMANY'
] as const

export const CountrySchema = z.enum(Countries)
export type Country = z.infer<typeof CountrySchema>

export const LocationBaseRequestSchema = z.object({
    street: z.string().min(1).max(50),
    houseNumber: z.string().min(1).max(10),
    postalCode: z.string().min(1).max(20),
    city: z.string().min(1).max(50),
    country: CountrySchema,
    googleMapsUrl: z.string().url().nullable().optional(),
}).strict()

export const LocationUpdateRequestSchema = LocationBaseRequestSchema.extend({}).strict()

export type LocationUpdateRequest = z.infer<typeof LocationUpdateRequestSchema>

export const LocationCreateRequestSchema = LocationBaseRequestSchema.extend({}).strict()

export type LocationCreateRequest = z.infer<typeof LocationCreateRequestSchema>

export const LocationResponseSchema = z.object({
    id: z.string(),
    street: z.string(),
    houseNumber: z.string(),
    postalCode: z.string(),
    city: z.string(),
    country: CountrySchema,
    googleMapsUrl: z.string().optional().nullable(),
})

export type LocationResponse = z.infer<typeof LocationResponseSchema>