import { useDeleteFromCVSended, useDeleteFromFavorute, useSandetCandidature, useSaveInFavorite } from "../../hooks"
import { MAIN_URL } from "@/shared/config"
import { Button } from "@/shared/components"
import { CiCirclePlus, CiHeart, CiTrash } from "react-icons/ci"
import { LiaHeartBrokenSolid } from "react-icons/lia"
import { useRouter } from "next/navigation"
import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type"
import { UserRole } from "@/features/auth/types"
import { ISaveInFavorites, ISendCadidature } from "@/features/agency/vacancy/types"

interface CandidateBtnsProps {
    jobId: string
    authUser: IUserMenuHeaderData
    savedBy: ISaveInFavorites[]
    curriculum: ISendCadidature[]
}

export function CandidateBtns({ jobId, authUser, curriculum, savedBy }: CandidateBtnsProps) {
    const router = useRouter()
    const { saveJob, isSaved } = useSaveInFavorite()
    const { sendCandidature, isSendet } = useSandetCandidature()
    const { deleteFormFavorite } = useDeleteFromFavorute()
    const { deleteCVFormJob } = useDeleteFromCVSended()

    const saveInFavorite = () => {
        if (!authUser) {
            return router.push(MAIN_URL.authCandidat())
        }

        if (authUser.role === UserRole.Candidat) {
            saveJob(jobId!)
        }
    }

    const sendCandudaturetoJob = () => {
        if (!authUser) {
            return router.push(MAIN_URL.authCandidat())
        }

        if (authUser.role === UserRole.Candidat) {
            sendCandidature(jobId!)
        }
    }

    const deleteFromFavorite = () => {
        deleteFormFavorite(jobId!)
    }

    const deleteCandudatureFromJob = () => {
        deleteCVFormJob(jobId!)
    }

    return (
        <>{isSaved || savedBy?.some(saved => saved.candidate.userId === authUser?.id) ? (
            <Button onClick={() => deleteFromFavorite()} >
                <LiaHeartBrokenSolid />
            </Button>
        ) : (
            <Button onClick={() => saveInFavorite()}>
                <CiHeart />
            </Button>
        )}
            {isSendet || curriculum?.some(cv => cv.candidate.userId === authUser?.id) ? (

                <Button onClick={() => deleteCandudatureFromJob()}>
                    <CiTrash /> Annulla candidatura
                </Button>
            ) : (
                <Button onClick={() => sendCandudaturetoJob()}>
                    <CiCirclePlus /> Candidati
                </Button>
            )}
        </>
    )
}