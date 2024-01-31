import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TasksState = {
  entities: Task[]
}

const initialState: TasksState = {
  entities: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload)
    },
    removeTask: (state) => state,
  }
})

