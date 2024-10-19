import { axiosPublic } from "@/shared/api"

class VerificationService {
    public async newVerification(token:string | null) {
        const response = await axiosPublic({
            url: 'auth/email-confirmation',
            method: 'POST',
            data: {
                token
            }
        })

        return response
    }
}

export const verificationService = new VerificationService()