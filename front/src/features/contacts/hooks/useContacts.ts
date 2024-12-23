import { useForm } from "react-hook-form"
import { TypeContactSchema } from "../schemes/contact.schema"
import { useMutation } from "@tanstack/react-query"
import { contactsServices } from "../services/contacts.service"
import { toastMessageHandler } from "@/shared/utils"
import { toast } from "sonner"
import { useAppSelector } from "@/shared/hooks"
import { useState } from "react"

export const useContacts = () => {
    const { data: user } = useAppSelector(state => state.reducer.user)
    const [recaptchaValue, setRecaptchValue] = useState<string | null>(null)

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

    const onSubmit = (data: TypeContactSchema) => {
        if (recaptchaValue) {
            mutate(data)
        } else {
            toast.error('Per favore, conferma che non sei un robot')
        }

    }

    return {
        form,
        onSubmit,
        isPending,
        setRecaptchValue
    }
}