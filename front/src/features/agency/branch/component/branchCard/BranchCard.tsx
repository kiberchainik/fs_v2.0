import { Button } from "@/shared/components";
import { IBItem } from "../../types";
import Link from "next/link";
import { AGENCY_URL } from "@/shared/config";

export function BranchCard ({id, name}: IBItem) {
    return (
        <div>
            <Button variant='link'>
                <Link href={AGENCY_URL.branches()}>{name}</Link>
            </Button>
        </div>
    )
}