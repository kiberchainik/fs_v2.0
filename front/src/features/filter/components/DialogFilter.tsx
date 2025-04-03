import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components";
import { Filter } from "./Filter";
import { CiFilter } from "react-icons/ci";
import { useTranslations } from "next-intl";

export function DialogFilter() {
    const t = useTranslations('jobOffers.filter')
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <CiFilter /> {t('filter_title')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('filter_title')}</DialogTitle>
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