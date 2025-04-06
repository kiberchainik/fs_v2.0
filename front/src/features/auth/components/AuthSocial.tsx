'use client'

import { Button } from "@/shared/components/ui"
import { useRouter } from "next/navigation"
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { API_URL, SERVER_URL } from "@/shared/config"

export function AuthSocial() {
    const router = useRouter()

    return <>
        <div className='flex justify-between items-center gap-x-1'>
            <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('google')}`)}>
                <FaGoogle /> Google
            </Button>
            <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('facebook')}`)}>
                <FaFacebook /> Facebook
            </Button>
            {/* <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('linkedin')}`)}>
                <FaLinkedin />
            </Button>
            <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('telegram')}`)}>
                <FaTelegram />
            </Button>
            <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('discord')}`)}>
                <FaDiscord />
            </Button> 
            <Button variant='outline' onClick={() => router.push(`${SERVER_URL}${API_URL.authSocial('github')}`)}>
                <FaGithub />
            </Button>*/}
        </div>
        <div className='relative my-3 space-y-4'>
            <div className='absolute inset-0 flex items-center mt-1'>
                <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2.5 py-1 text-muted-foreground rounded-full'>or</span>
            </div>
        </div>
    </>
}