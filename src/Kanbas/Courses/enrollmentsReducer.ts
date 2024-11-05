import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments= [...state.enrollments, newEnrollment];
    },
    deleteEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => (enrollment.user !== action.payload.userId || 
                           enrollment.course !== action.payload.courseId)
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;