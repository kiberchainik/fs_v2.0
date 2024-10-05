'use client'

import { Button } from "@/shared/components/ui"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTelegram, FaYandex } from 'react-icons/fa'
import { authService } from "../services"

export function AuthSocial () {
    const router = useRouter()

    const {mutateAsync} = useMutation({
        mutationKey: ['oauth by provider'],
        mutationFn: async (provider:string) => await authService.oauthByprovider(provider)
    })

    const onClick = async(provider:string) => {
        const response = await mutateAsync(provider)

        if(response) router.push(response.url)
    }

    return <>
        <div className='flex justify-between items-center gap-x-1'>
            <Button variant='outline' onClick={() => onClick('google')}>
                <FaGoogle />
            </Button>
            <Button variant='outline'>
                <FaFacebook />
            </Button>
            <Button variant='outline'>
                <FaInstagram />
            </Button>
            <Button variant='outline'>
                <FaTelegram />
            </Button>
            <Button variant='outline'>
                <FaDiscord />
            </Button>
            <Button variant='outline'>
                <FaGithub />
            </Button>
        </div>
        {/* <div className='relative my-3 space-y-4'>
            <div className='absolute inset-0 flex items-center mt-1'>
                <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>or</span>
            </div>
        </div> */}
    </>
}