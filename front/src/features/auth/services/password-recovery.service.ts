import { api } from "@/shared/api";
import { IUser } from "../types";
import { TypeNewPasswordSchema, TypeResetPasswordSchema } from "../schemes";

class PasswordRecoveryService {
    public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await api.post<IUser>('auth/password-record/reset', body, {
            headers
        })

        return response
    }

    public async newpassword(body: TypeNewPasswordSchema, token: string | null, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined

        const response = await api.post<IUser>(`auth/password-record/new/${token}`, body, {
            headers
        })

        return response
    }
}

export const resetPasswordService = new PasswordRecoveryService()