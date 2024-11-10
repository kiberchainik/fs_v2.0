import userReducer from "@/features/userHeaderBtn/slice/userSlice";
import vacancyReducer from "@/features/vacancy/slice/sliceVacancy";
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  user: userReducer,
  vacancies: vacancyReducer
});

export type RootState = ReturnType<typeof rootReducer>;