import { z } from 'zod'

export const SocialSchema = z.object({
    social: z.string().url('Invalid URL format').min(1, 'At least one link is required')
})

export type TypeSocialSchema = z.infer<typeof SocialSchema>