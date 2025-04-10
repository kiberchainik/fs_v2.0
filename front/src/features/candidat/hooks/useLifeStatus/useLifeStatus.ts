import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { lifestatusService } from "../../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { LifeStatusSchema, TypeLifeStatusSchema } from "../../schemes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useGetLifeStatus() {
    const { data: lifestatus, isFetching } = useQuery({
        queryKey: ['get candidat life status'],
        queryFn: () => lifestatusService.getLifeStatus()
    })

    return useMemo(() => ({
        lifestatus,
        isFetching
    }), [lifestatus, isFetching])
}

export function useUpdLifeStatusMutation() {
    const queryClient = useQueryClient()

    const { mutate: updLifeStatus, isPending } = useMutation({
        mutationKey: ['upd candidat life status'],
        mutationFn: (data: TypeLifeStatusSchema) => lifestatusService.updateLifeStatus(data),
        onSuccess() {
            toast.success('Profilo aggiornato con successo')
            queryClient.invalidateQueries({ queryKey: ['get candidat life status'] })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ updLifeStatus, isPending }), [updLifeStatus, isPending])
}

export function LifeStateLogic() {
    const { lifestatus, isFetching } = useGetLifeStatus()
    const { updLifeStatus, isPending } = useUpdLifeStatusMutation()

    const form = useForm<TypeLifeStatusSchema>({
        mode: 'onChange',
        resolver: zodResolver(LifeStatusSchema),
        values: {
            availabilityTransport: lifestatus?.availabilityTransport || false,
            driverCategory: lifestatus?.driverCategory || [],
            maritalStatus: lifestatus?.maritalStatus || ''
        }
    })

    const handleForm = (value: TypeLifeStatusSchema) => {
        updLifeStatus(value)
    }

    return {
        form,
        handleForm
    }
}