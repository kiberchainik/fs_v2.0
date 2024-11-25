import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components";
import { Filter } from "./Filter";
import { CiFilter } from "react-icons/ci";

export function DialogFilter() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <CiFilter /> Filter
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Filer vacancies</DialogTitle>
                </DialogHeader>
                <Filter />
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}