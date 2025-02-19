import { Skeleton } from "@/shared/components"

export const AgencySkeleton = () => {
    return (
        <Skeleton>
            <div className="flex flex-col items-center bg-neutral-800 p-5 rounded-3xl w-[350px]">
                <div className="bg-neutral-700 p-5 shadow-2xl shadow-slate-200-50/30 rounded-2xl h-[80px] w-[80px]"></div>
                <div className="flex flex-col items-center gap-y-4 mt-5">
                    <span className="h-4 w-40 bg-neutral-700 rounded-full"></span>
                    <span className="h-4 w-40 bg-neutral-700 rounded-full"></span>
                    <span className="h-4 w-60 bg-neutral-700 rounded-full"></span>
                    <span className="h-4 w-60 bg-neutral-700 rounded-full"></span>
                    <span className="h-4 w-60 bg-neutral-700 rounded-full"></span>
                    <div className="flex gap-x-2 pt-5 border-t border-dashed border-[#ccc]/50 w-full justify-between">
                        <div className="bg-neutral-800 rounded-full px-4 py-2">
                            <div className="text-[#fafaf9]/30">Tutte offerte</div>
                        </div>
                        <div className="px-4 py-2">
                            <div className="text-[#fafaf9]/30">Agency website</div>
                        </div>
                    </div>
                </div>
            </div >
        </Skeleton >
    )
}