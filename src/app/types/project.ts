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
  alias: string;
}
