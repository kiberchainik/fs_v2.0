import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VacancySlice {
    data: IVacanciaesFullDate[] | null
    isLoading: boolean
    error: string | null
    sortBy: "title" | "createdAt" | "views";
}

const initialState: VacancySlice = {
    data: null,
    isLoading: false,
    error: null,
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

export const { setJobs, setLoading, setError, setSortBy, sortJobs } = vacancySlice.actions

export default vacancySlice.reducer