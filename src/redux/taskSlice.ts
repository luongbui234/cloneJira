import {
  DetailTask,
  PriorityTask,
  StatusTask,
  TypeTask,
} from "@/app/types/task";
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  detailTask: DetailTask;
  typeTask: TypeTask[];
  statusTask: StatusTask[];
  priorityTask: PriorityTask[];
}

const initialState: Props = {
  detailTask: {
    priorityTask: {
      priorityId: 0,
      priority: "",
    },
    taskTypeDetail: {
      id: 0,
      taskType: "",
    },
    assigness: [],
    lstComment: [],
    taskId: 0,
    taskName: "",
    alias: "",
    description: "",
    statusId: "",
    originalEstimate: 0,
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
    typeId: 0,
    priorityId: 0,
    projectId: 0,
  },
  typeTask: [],
  statusTask: [],
  priorityTask: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setDetailTask: (state, action) => {
      state.detailTask = action.payload;
    },
    setTypeTask: (state, action) => {
      state.typeTask = action.payload;
    },
    setStatusTask: (state, action) => {
      state.statusTask = action.payload;
    },
    setPriorityTask: (state, action) => {
      state.priorityTask = action.payload;
    },
  },
});

export const { setDetailTask, setTypeTask, setStatusTask, setPriorityTask } =
  taskSlice.actions;

export default taskSlice.reducer;
