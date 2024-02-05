import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type TasksState = {
  entities: Task[]
}
type DraftTask = RequireOnly<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
  return {
    id: nanoid(),
    ...draftTask
  }
}
const initialState: TasksState = {
  entities: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task)
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(task => task.id === action.payload);
      state.entities.splice(index, 1)
    },
  }
})

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions
export default tasksSlice
