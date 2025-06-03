import { configureStore } from "@reduxjs/toolkit";
import  EmployeeReducer  from "./employee/employeeReducer";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import baseApi from "../api-services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    employee: EmployeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
   middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(baseApi.middleware)
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = useSelector<RootState, any>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
