import { IJobsResponce } from "@/features/agency/vacancy/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VacancySlice {
    data: IJobsResponce | null
    isLoading: boolean
    error: string | null
}

const initialState: VacancySlice = {
    data: null,
    isLoading: false,
    error: null
}

const vacancySlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setJobs(state, action: PayloadAction<IJobsResponce | null>) {
            state.data = action.payload
            state.isLoading = false
            state.error = null
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        }
    }
})

export const { setJobs, setLoading, setError } = vacancySlice.actions

export default vacancySlice.reducer