import { z } from 'zod'
import { LocationCreateRequestSchema, LocationResponseSchema } from './location'
import { FarmResponseSchema } from './farm'
import { ImageCreateRequestSchema, ImageResponseSchema } from './image'

export const FarmShopBaseRequestSchema = z.object({
    name: z.string().min(1).max(50),
    slogan: z.string().min(1).max(50),
    description: z.string().min(1).max(2000),
    url: z.url().optional().nullable(),
    farmId: z.uuid(),
    products: z.string().min(1).max(1024)
}).strict()

export const FarmShopUpdateRequestSchema = FarmShopBaseRequestSchema.extend({
    locationId: z.uuid(),
    previewImageId: z.uuid().optional().nullable(),
    avatarImageId: z.uuid().optional().nullable(),
}).strict()

export type FarmShopUpdateRequest = z.infer<typeof FarmShopUpdateRequestSchema>

export const FarmShopCreateRequestSchema = FarmShopBaseRequestSchema.extend({
    location: LocationCreateRequestSchema,
    previewImage: ImageCreateRequestSchema.optional().nullable(),
    avatarImage: ImageCreateRequestSchema.optional().nullable()
}).strict()

export type FarmShopCreateRequest = z.infer<typeof FarmShopCreateRequestSchema>

export const FarmShopResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    slogan: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    location: LocationResponseSchema,
    farm: FarmResponseSchema,
    previewImage: ImageResponseSchema.optional().nullable(),
    avatarImage: ImageResponseSchema.optional().nullable(),
    products: z.string()
})

export type FarmShopResponse = z.infer<typeof FarmShopResponseSchema>
