import {
  Category,
  CategoryApi,
  DetailProject,
  EditProject,
  Member,
  Project,
  UserNotYetAdded,
} from "@/app/types/project";
import { createSlice } from "@reduxjs/toolkit";

interface Props {
  listProject: Project[];
  detailProject: DetailProject;
  editProject: EditProject;
  membersProject: Member[];
  listUserNotYetAdded: UserNotYetAdded[];
  categoryProject: Category[];
}

const initialState: Props = {
  listProject: [],
  detailProject: {
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
    lstTask: [],
    members: [],
  },
  editProject: {
    id: 0,
    projectName: "",
    creator: {
      id: 0,
      name: "",
    },
    description: "",
    categoryId: {
      id: 0,
      name: "",
    },
  },
  membersProject: [],
  listUserNotYetAdded: [],
  categoryProject: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
    setDetailProject: (state, action) => {
      const detail: DetailProject = action.payload;
      state.editProject = {
        id: detail.id,
        projectName: detail.projectName,
        creator: detail.creator,
        description: detail.description,
        categoryId: detail.projectCategory,
      };
      state.membersProject = detail.members;
      state.detailProject = detail;
    },
    setListUserNotYetAdded: (state, action) => {
      const userNotYet: UserNotYetAdded[] = action.payload;
      const members: Member[] = state.membersProject;
      const memberId: number[] = members.map((member) => member.userId);
      const newUserNotYet: Member[] = userNotYet.filter((user) => {
        return !memberId.includes(user.userId);
      });
      state.listUserNotYetAdded = newUserNotYet;
    },
    setCategoryProject: (state, action) => {
      const categoryApi: CategoryApi[] = action.payload;
      const category = categoryApi.map((item, index) => {
        return {
          key: index + 1,
          label: item.projectCategoryName,
          value: item.id,
        };
      });
      state.categoryProject = category;
    },
  },
});

export const {
  setListProject,
  setDetailProject,
  setListUserNotYetAdded,
  setCategoryProject,
} = projectSlice.actions;

export default projectSlice.reducer;
