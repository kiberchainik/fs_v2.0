import { Skeleton } from "@/shared/components"

export const CandidatSkeleton = () => {
    return (
        <Skeleton>
            <div className="mb-6 rounded-3xl bg-neutral-900 p-6 w-[350px]">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-row items-center w-full">
                        <div className="mr-5 rounded-full h-[80px] w-[120px] shadow-2xl shadow-slate-700-500/20 bg-neutral-800" />
                        <div className="flex flex-col gap-y-3 justify-center w-full">
                            <div className="h-4 w-full rounded-full bg-neutral-800"></div>
                            <div className="h-4 w-full rounded-full bg-neutral-800"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 my-6 justify-center">
                    <div className="h-4 rounded-full bg-neutral-800 w-full"></div>
                    <div className="h-4 rounded-full bg-neutral-800 w-full"></div>
                    <div className="h-4 rounded-full bg-neutral-800 w-full"></div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#ccc]/50 dark:border-neutral-700">
                    <div className="flex gap-x-1 pt-5">
                        <span className="bg-neutral-800 rounded-full p-2 px-3 mb-1 inline-block h-10 w-24"></span>
                        <span className="bg-neutral-800 rounded-full p-2 px-3 mb-1 inline-block h-10 w-24"></span>
                    </div>
                </div>
            </div>
        </Skeleton >
    )
}