import { toast } from "sonner"

export function toastMessageHandler (error: any) {
    if(error.response && error.response.data && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message
        
        if(Array.isArray(errorMessage)) {
            const res = errorMessage.map(err => {
                return err.charAt(0).toUpperCase() + err.slice(1);
            }).join('! ')
            toast.error(res)
        } else {
            toast.error(errorMessage)
        }
    } else {
        toast.error('Server error!')
    }
}