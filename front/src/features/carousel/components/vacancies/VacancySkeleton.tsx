import { Skeleton } from "@/shared/components"
import { PiEyeLight } from "react-icons/pi"

export const VacancySkeleton = () => {
    return (
        <Skeleton>
            <div className="md:w-[410px] w-80 mb-4">
                <div className="shadow-2xl shadow-slate-600/20 rounded-3xl bg-neutral-900 p-6">
                    <div className="flex flex-row items-center gap-x-5 w-full">
                        <div className="shadow-2xl shadow-slate-300-100 rounded-2xl bg-neutral-800 p-5 h-20 w-24"></div>
                        <div className="w-full">
                            <div className="mb-3 bg-neutral-800 h-4 w-full rounded-full"></div>
                            <div className="bg-neutral-800 h-4 w-full rounded-full"></div>
                        </div>
                    </div>
                    <div className="py-4 mt-3">
                        <div className="flex flex-row flex-wrap gap-2 text-sm">
                            <div className="rounded-full bg-neutral-800 h-10 w-28"></div>
                            <div className="rounded-full bg-neutral-800 h-10 w-24"></div>
                            <div className="rounded-full bg-neutral-800 h-10 w-20"></div>
                        </div>
                        <div className="mb-3 mt-5 bg-neutral-800 rounded-full h-5 w-full"></div>
                        <div className="mb-3 mt-4 bg-neutral-800 rounded-full h-4 w-full"></div>
                        <div className="mb-3 mt-4 bg-neutral-800 rounded-full h-4 w-full"></div>
                    </div>
                    <div className="flex flex-row items-center border-neutral-800 border-t border-dashed pt-4 justify-between">
                        <div className="flex flex-row items-center gap-x-2 p-2 px-3 mb-1 h-10 w-28">
                            <PiEyeLight className="text-primary/40 text-2xl" /> <span className="text-primary/40 font-light text-xl">0</span>
                        </div>
                        <div className="bg-neutral-800 rounded-full p-2 px-3 mb-1 inline-block h-10 w-28"></div>
                    </div>
                </div>
            </div>
        </Skeleton >
    )
}