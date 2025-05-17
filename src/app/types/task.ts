import { Assigness } from "./project";

export interface PriorityTask {
  priorityId: number;
  priority: string;
  description: string;
  deleted: boolean;
  alias: string;
}

export interface StatusTask {
  statusId: string;
  statusName: string;
  alias: string;
  deleted: string;
}

export interface Comment {
  id: number;
  idUser: number;
  name: string;
  avatar: string;
  commentContent: string;
}

export interface TypeTask {
  id: number;
  taskType: string;
}

export interface DetailTask {
  priorityTask: {
    priorityId: number;
    priority: string;
  };
  taskTypeDetail: TypeTask;
  assigness: Assigness[];
  lstComment: Comment[];
  taskId: number;
  taskName: string;
  alias: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  typeId: number;
  priorityId: number;
  projectId: number;
}

export interface LstTask {
  lstTaskDeTail: DetailTask[];
  statusId: number;
  statusName: string;
  alias: string;
}

export interface CreateTask {
  listUserAsign: number[];
  taskName: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  projectId: number;
  typeId: number;
  priorityId: number;
}

export interface UpdateTask {
  listUserAsign: number[];
  taskId: string;
  taskName: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  projectId: number;
  typeId: number;
  priorityId: number;
}

export interface InsertComment {
  taskId: number;
  contentComment: string;
}

export interface UpdateComment {
  idComment: number;
  contentComment: string;
}

export interface UserTask {
  taskId: number;
  userId: number;
}

export interface UpdateStatus {
  taskId: number;
  statusId: string;
}

export interface UpdatePriority {
  taskId: number;
  priorityId: number;
}

export interface UpdateDescription {
  taskId: number;
  description: string;
}

export interface UpdateEstimate {
  taskId: number;
  originalEstimate: number;
}

export interface UpdateTimeTracking {
  taskId: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
}

export interface DragType {
  column: string;
  card: string;
}
