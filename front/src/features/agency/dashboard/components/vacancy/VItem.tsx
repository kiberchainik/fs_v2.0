import { IVacanciaesList } from "@/features/agency/vacancy/types";
import { Button } from "@/shared/components";
import Link from "next/link";

export function VItem ({id, title, slug, description}:IVacanciaesList) {
    return (
        <div>
            <Button variant='link'>
                <Link href={`/vacancy/${slug}`}>{title}</Link>
            </Button>
            <div>{description}</div>
        </div>
    )
}