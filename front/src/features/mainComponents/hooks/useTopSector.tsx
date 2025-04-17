'use client'

import { useGetOptionsContractTypes } from "@/features/agency/vacancy/hooks"
import { useCategory } from "@/features/category/hooks"
import { useFilterVacancy } from "@/features/filter/hooks/useFilterVacancy"
import { FilterVacancySchema, TypeFilterVacancies } from "@/features/filter/schemes/filter.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

export function useTopSector() {
    const { categories, isFetching } = useCategory()
    const { contractType, isFetching: isFCT } = useGetOptionsContractTypes()
    const { filterParams } = useFilterVacancy()
    const form = useForm<TypeFilterVacancies>({
        mode: 'onChange',
        resolver: zodResolver(FilterVacancySchema),
        values: {
            categoryId: '',
            location: '',
            contractTypeId: ''
        }
    })

    const onSubmit = (values: TypeFilterVacancies) => {
        filterParams(values)
    }
    return useMemo(() => ({
        form, categories, isFetching, onSubmit, contractType, isFCT
    }),
        [form, categories, isFetching, onSubmit, contractType, isFCT])
}