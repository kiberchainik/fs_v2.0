import { axiosPublic } from "@/shared/api"

class VerificationService {
    public async newVerification(token:string | null) {
        const response = await axiosPublic.post('auth/email-confirmation', {token})

        return response
    }
}

export const verificationService = new VerificationService()