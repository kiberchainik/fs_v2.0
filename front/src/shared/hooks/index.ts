import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Создаем типизированный `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;