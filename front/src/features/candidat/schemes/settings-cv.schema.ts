import { z } from "zod";

export const settingsCVSchema = z.object({
    isShowCVInSearch: z.boolean().default(true),
    isOpenForAgency: z.boolean().default(true),
})

export type TypeSettingsCVSchema = z.infer<typeof settingsCVSchema>;