import { axiosPublic } from "@/shared/api";
import { IUser } from "../types";
import { TypeNewPasswordSchema, TypeResetPasswordSchema } from "../schemes";

class PasswordRecoveryService {
    public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await axiosPublic.post<IUser>('auth/password-recovery/reset', body, {
            headers
        })

        return response
    }

    public async newpassword(body: TypeNewPasswordSchema, token: string | null, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await axiosPublic.post<IUser>(`auth/password-recovery/new/${token}`, body, {
            headers
        })

        return response
    }
}

export const resetPasswordService = new PasswordRecoveryService()