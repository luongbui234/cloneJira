import { EditProject, Project } from "@/app/types/project";
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  listProject: Project[];
  editProject: EditProject;
}

const initialState: Props = {
  listProject: [],
  editProject: {
    id: 0,
    projectName: "",
    creator: {
      id: 0,
      name: "",
    },
    description: "",
    projectCategory: {
      id: 0,
      name: "",
    },
    lstTask: { lstTaskDeTail: [], statusId: 0, statusName: "", alias: "" },
    members: [],
  },
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
    setEditProject: (state, action) => {
      state.editProject = action.payload;
    },
  },
});

export const { setListProject, setEditProject } = projectSlice.actions;

export default projectSlice.reducer;
