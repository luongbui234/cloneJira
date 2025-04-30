import { CreateProject } from "../types/project";
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
