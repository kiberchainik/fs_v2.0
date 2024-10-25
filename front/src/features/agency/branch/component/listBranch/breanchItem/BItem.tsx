import { Button } from "@/shared/components";
import { IBItem } from "../../../types";
import Link from "next/link";

export function BItem ({id, name}: IBItem) {
    return (
        <div>
            <Button variant='link'>
                <Link href={`/agency/branch/${id}`}>{name}</Link>
            </Button>
        </div>
    )
}