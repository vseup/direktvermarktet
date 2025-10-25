import { z } from 'zod'

const ImageBaseRequestSchema = z.object({
    path: z.string().min(1).max(1024)
}).strict()

export const ImageUpdateRequestSchema = ImageBaseRequestSchema.extend({}).strict()

export type ImageUpdateRequest = z.infer<typeof ImageUpdateRequestSchema>

export const ImageCreateRequestSchema = ImageBaseRequestSchema.extend({}).strict()

export type ImageCreateRequest = z.infer<typeof ImageCreateRequestSchema>

export const ImageResponseSchema = z.object({
    id: z.string(),
    path: z.string()
})

export type ImageResponse = z.infer<typeof ImageResponseSchema>