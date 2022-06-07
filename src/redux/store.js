import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";
import Student from "./Student";
export const store = configureStore({
  reducer: {
    counter: Counter,
    student: Student,
  },
});
