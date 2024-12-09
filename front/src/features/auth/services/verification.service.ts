import { axiosPublic } from "@/shared/api"
import { IEmailVerifyResponse } from "../types"
import { API_URL } from "@/shared/config"
import { saveTokenStorage } from "@/shared/services"

class VerificationService {
    public async newVerification(token: string | null) {
        const response = await axiosPublic<IEmailVerifyResponse>({
            url: API_URL.confirmEmail(),
            method: 'POST',
            data: {
                token
            }
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }
}

export const verificationService = new VerificationService()