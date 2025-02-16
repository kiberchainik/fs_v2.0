import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
    locales: ['en', 'it', 'ro', 'ru'],
    defaultLocale: 'it'
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)