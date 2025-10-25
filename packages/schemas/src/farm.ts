import { z } from 'zod'
import { ImageCreateRequestSchema, ImageResponseSchema } from './image'
import { LocationCreateRequestSchema, LocationResponseSchema } from './location'

const FarmBaseRequestSchema = z.object({
    name: z.string().min(1).max(50),
    slogan: z.string().min(1).max(50),
    description: z.string().min(1).max(2000),
    url: z.url().optional().nullable(),
}).strict()

export const FarmUpdateRequestSchema = FarmBaseRequestSchema.extend({
    locationId: z.uuid(),
    previewImageId: z.uuid().optional().nullable(),
    avatarImageId: z.uuid().optional().nullable(),
}).strict()

export type FarmUpdateRequest = z.infer<typeof FarmUpdateRequestSchema>

export const FarmCreateRequestSchema = FarmBaseRequestSchema.extend({
    location: LocationCreateRequestSchema,
    previewImage: ImageCreateRequestSchema.optional().nullable(),
    avatarImage: ImageCreateRequestSchema.optional().nullable()
}).strict()

export type FarmCreateRequest = z.infer<typeof FarmCreateRequestSchema>

export const FarmResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    slogan: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    location: LocationResponseSchema,
    previewImage: ImageResponseSchema.optional().nullable(),
    avatarImage: ImageResponseSchema.optional().nullable()
})

export type FarmResponse = z.infer<typeof FarmResponseSchema>