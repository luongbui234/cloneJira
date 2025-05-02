import { CreateProject, EditProject, UserProject } from "../types/project";
import { https } from "./config";

export const getCategoryService = async () => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/ProjectCategory",
    "GET",
    null
  );
};

export const createProjectService = async (data: CreateProject) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Project/createProject",
    "POST",
    data
  );
};

export const getProjectService = async (
  keyword: string | number | undefined
) => {
  const url =
    keyword === undefined || keyword === ""
      ? "https://jiranew.cybersoft.edu.vn/api/Project/getAllProject"
      : `https://jiranew.cybersoft.edu.vn/api/Project/getAllProject?keyword=${keyword}`;
  return await https(url, "GET", null);
};

export const deleteProjectService = async (id: number) => {
  return await https(
    `https://jiranew.cybersoft.edu.vn/api/Project/deleteProject?projectId=${id}`,
    "DELETE",
    null
  );
};

export const getProjectDetailService = async (
  id: string | string[] | undefined
) => {
  return await https(
    `https://jiranew.cybersoft.edu.vn/api/Project/getProjectDetail?id=${id}`,
    "GET",
    null
  );
};

export const updateProjectService = async (data: EditProject) => {
  return await https(
    `https://jiranew.cybersoft.edu.vn/api/Project/updateProject?projectId=${data.id}`,
    "PUT",
    data
  );
};

export const assignUserProject = async (data: UserProject) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Project/assignUserProject",
    "POST",
    data
  );
};

export const removeUserProject = async (data: UserProject) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Project/removeUserFromProject",
    "POST",
    data
  );
};
