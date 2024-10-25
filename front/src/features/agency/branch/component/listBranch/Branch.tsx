'use client'

import { Button, Card, CardContent, Loader } from "@/shared/components"
import { useGetBranch } from "../../hooks"
import Link from "next/link"
import { BItem } from "./breanchItem/BItem"

export function Branch () {
    const {branches, isFetching} = useGetBranch()
    return (
        <Card className='p-5 w-[300px]'>
            <CardContent>
                {isFetching
                    ? <Loader />
                    : branches ? (
                        branches.map(branch => (
                            <BItem key={branch.id} {...branch} />
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <p>You dont have filials</p>
                            <Button variant='link'>
                                <Link href='/agency/add-branch'>Create new filial</Link>
                            </Button>
                        </div>
                    )}
            </CardContent>
        </Card>
    )
}