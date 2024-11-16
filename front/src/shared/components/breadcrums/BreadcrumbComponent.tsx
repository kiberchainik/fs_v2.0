'use client'

import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/components/ui"
import { usePathname } from "next/navigation"

export type TBreadcrumbs = {
    href: string
    title: string
}[]

export function BreadcrumbComponent() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment)

    const breadcrumbs = pathSegments.map((segment, index) => {
        const url = "/" + pathSegments.slice(0, index + 1).join("/");

        return {
            name: segment.replace(/-/g, " ").toUpperCase(), // Форматируем название
            url,
        };
    })

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map(({ name, url }, index) => (
                    <BreadcrumbItem key={url}>
                        <BreadcrumbLink>
                            <Link href={url}>{name}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}