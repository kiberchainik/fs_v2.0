import { useForm } from "react-hook-form"
import { TypeContactSchema } from "../schemes/contact.schema"
import { useMutation } from "@tanstack/react-query"
import { contactsServices } from "../services/contacts.service"
import { toastMessageHandler } from "@/shared/utils"
import { toast } from "sonner"
import { useAppSelector } from "@/shared/hooks"
import { useReCaptcha } from "@/shared/providers/ReCaptchaProvider"

export const useContacts = () => {
    const { data: user } = useAppSelector(state => state.reducer.user)
    const { executeRecaptcha } = useReCaptcha()

    const form = useForm<TypeContactSchema>({
        mode: 'onChange',
        defaultValues: {
            name: user?.name ? user.name : '',
            email: user?.email ? user?.email : '',
            message: ''
        }
    })

    const { mutate, isPending } = useMutation({
        mutationKey: ['contacts'],
        mutationFn: (data: TypeContactSchema) => contactsServices.sendContactForm(data),
        onSuccess: () => {
            toast.success('Grazie! Suo messaggio inviato con successo')
            form.reset()
        },
        onError: (error) => {
            toastMessageHandler(error)
        }
    })

    const onSubmit = async (data: TypeContactSchema) => {
        const token = await executeRecaptcha()
        if (token) {
            mutate(data)
        } else {
            toast.error('Captcha error')
        }

    }

    return {
        form,
        onSubmit,
        isPending
    }
}