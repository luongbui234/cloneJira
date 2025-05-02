export interface CategoryApi {
  id: number;
  projectCategoryName: string;
}

export interface Category {
  value: number;
  label: string;
}

export interface CreateProject {
  projectName: string;
  description: string;
  categoryId: number;
}

export interface Creator {
  id: number;
  name: string;
}

export interface Member {
  userId: number;
  name: string;
  avatar: string;
}

export interface Project {
  id: number;
  projectName: string;
  categoryName: string;
  creator: Creator;
  description: string;
  categoryId: number;
  members: Member[];
}

export interface ListTask {
  lstTaskDeTail: [];
  statusId: number;
  statusName: string;
  alias: string;
}

export interface DetailProject {
  id: number;
  projectName: string;
  creator: Creator;
  description: string;
  projectCategory: {
    id: number;
    name: string;
  };
  lstTask: ListTask;
  members: Member[];
}

export interface EditProject {
  id: number;
  projectName: string;
  creator: Creator;
  description: string;
  categoryId: {
    id: number;
    name: string;
  };
}

export interface UserNotYetAdded {
  userId: number;
  name: string;
  avatar: string;
}

export interface UserProject {
  projectId: number | string | string[] | undefined;
  userId: number;
}
