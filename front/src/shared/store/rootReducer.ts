import userReducer from "@/features/userHeaderBtn/slice/userSlice";
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer