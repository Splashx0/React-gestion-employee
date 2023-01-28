import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import employeeReducer from "./features/employee";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: {
    employee: persistedReducer,
  },
});
export const persistor = persistStore(store);
