import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { PAGE_LIMIT_DEFAULT, PAGE_NUM_DEFAULT } from "@/shared/constants/seo.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VacancySlice {
    data: IVacanciaesFullDate[] | null
    isLoading: boolean
    error: string | null
    limit?: string
    page?: string
    totalPages: number
    totalCountJobs: number
    sortBy: "title" | "createdAt" | "views";
}

const initialState: VacancySlice = {
    data: null,
    isLoading: false,
    error: null,
    limit: PAGE_LIMIT_DEFAULT,
    page: PAGE_NUM_DEFAULT,
    totalPages: 1,
    totalCountJobs: 1,
    sortBy: "createdAt"
}

const vacancySlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setJobs(state, action: PayloadAction<IVacanciaesFullDate[] | null>) {
            state.data = action.payload
            state.isLoading = false
            state.error = null
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.totalPages = action.payload
        },
        setCountTotalJobs(state, action: PayloadAction<number>) {
            state.totalCountJobs = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        },
        setSortBy(state, action: PayloadAction<"title" | "createdAt" | "views">) {
            state.sortBy = action.payload;
        },
        sortJobs(state) {
            if (state.data) {
                const sortBy = state.sortBy;
                state.data = state.data.slice().sort((a: IVacanciaesFullDate, b: IVacanciaesFullDate) => {
                    if (sortBy === "title") {
                        return a.title.localeCompare(b.title);
                    } else if (sortBy === "createdAt") {
                        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                    } else {
                        return Number(b.views) - Number(a.views);
                    }
                });
            }
        }
    }
})

export const { setJobs, setLoading, setError, setSortBy, sortJobs, setPageCount, setCountTotalJobs } = vacancySlice.actions

export default vacancySlice.reducer