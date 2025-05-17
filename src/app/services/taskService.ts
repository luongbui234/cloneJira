import {
  CreateTask,
  InsertComment,
  UpdateComment,
  UpdateDescription,
  UpdateEstimate,
  UpdatePriority,
  UpdateStatus,
  UpdateTask,
  UpdateTimeTracking,
  UserTask,
} from "../types/task";
import { https } from "./config";

export const getTaskDetail = (taskId: number) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Project/getTaskDetail?taskId=${taskId}`,
    "GET",
    null
  );
};

export const getTaskTypeService = () => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/TaskType/getAll",
    "GET",
    null
  );
};

export const getTaskStatusService = () => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Status/getAll",
    "GET",
    null
  );
};

export const getTaskPriorityService = () => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Priority/getAll?id=0",
    "GET",
    null
  );
};

export const createTaskService = (data: CreateTask) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/createTask",
    "POST",
    data
  );
};

export const removeTaskService = (taskId: number) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Project/removeTask?taskId=${taskId}`,
    "DELETE",
    null
  );
};

export const updateTaskService = (data: UpdateTask) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updateTask",
    "POST",
    data
  );
};

export const updateDescriptionTaskService = (data: UpdateDescription) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updateDescription",
    "PUT",
    data
  );
};

// export const getCommentTaskService = (taskId: number) => {
//   return https(
//     `https://jiranew.cybersoft.edu.vn/api/Comment/getAll?taskId=${taskId}`,
//     "GET",
//     null
//   );
// };

export const insertComment = (data: InsertComment) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Comment/insertComment",
    "POST",
    data
  );
};

export const updateComment = (data: UpdateComment) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Comment/updateComment?id=${data.idComment}&contentComment=${data.contentComment}`,
    "PUT",
    null
  );
};

export const deleteComment = (idComment: number) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Comment/deleteComment?idComment=${idComment}`,
    "DELETE",
    null
  );
};

export const updateStatusTaskService = (data: UpdateStatus) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updateStatus",
    "PUT",
    data
  );
};

export const assignUserTaskService = (data: UserTask) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/assignUserTask",
    "POST",
    data
  );
};

export const removeUserTaskService = (data: UserTask) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/removeUserFromTask",
    "POST",
    data
  );
};

export const updatePriorityTaskService = (data: UpdatePriority) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updatePriority",
    "PUT",
    data
  );
};

export const updateEstimateTaskService = (data: UpdateEstimate) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updateEstimate",
    "PUT",
    data
  );
};

export const updateTimeTrackingTaskService = (data: UpdateTimeTracking) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Project/updateTimeTracking",
    "PUT",
    data
  );
};
