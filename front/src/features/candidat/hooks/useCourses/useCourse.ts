import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { coursesService } from "../../services"
import { AxiosResponse } from "axios"
import { ICourses, TCreateCourse } from "../../types"
import { toastMessageHandler } from "@/shared/utils"

const COURESE_QUERY_KEY = ['get candidat courses']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: COURESE_QUERY_KEY })
    toast.success(message)
}

export function useCourses() {
    const { data: courses, isFetching } = useQuery({
        queryKey: COURESE_QUERY_KEY,
        queryFn: () => coursesService.getCourses()
    })

    return useMemo(() => ({
        courses, isFetching
    }), [courses, isFetching])
}

function useCourseMutation({
    mutationKey,
    mutationFn,
    successMsg
}: {
    mutationKey: string[],
    mutationFn: (args: { id?: string; data?: TCreateCourse }) => Promise<AxiosResponse<ICourses | { count: number }, any>>,
    successMsg: string
}) {
    const queryClient = useQueryClient()

    const { mutate, isPending, isError } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: () => handleMutationSuccess(queryClient, successMsg),
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { mutate, isPending, isError }
}

export function useCreateCourse() {
    const { mutate: newCourse, isPending: isPendingCreate, isError } = useCourseMutation({
        mutationKey: ['create new cours'],
        mutationFn: ({ data }) => coursesService.createCourses(data!),
        successMsg: 'Cours created successfully'
    })

    return { newCourse, isPendingCreate, isError }
}

export function useUpdCourse() {
    const { mutate: course, isPending: isPendingUpdate } = useCourseMutation({
        mutationKey: ['update candidat cours'],
        mutationFn: ({ id, data }) => coursesService.updateCourses(id!, data!),
        successMsg: 'Cours edited successfully'
    })

    return { course, isPendingUpdate }
}

export function useDeleteCourse() {
    const { mutate: deleteCourse, isPending: isPendingDelete } = useCourseMutation({
        mutationKey: ['delete candidat cours'],
        mutationFn: ({ id }) => coursesService.deleteCourses(id!),
        successMsg: 'Cours deleted successfully',
    })

    return { deleteCourse, isPendingDelete }
}