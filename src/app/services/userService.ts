import { User } from "../types/user";
import { https } from "./config";

export const getUserService = async (keyword: string | number | undefined) => {
  return await https(
    `https://jiranew.cybersoft.edu.vn/api/Users/getUser?keyword=${
      keyword || ""
    }`,
    "GET",
    null
  );
};

export const updateUserService = async (data: User) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Users/editUser",
    "PUT",
    data
  );
};

export const deleteUserService = async (id: number) => {
  return await https(
    `https://jiranew.cybersoft.edu.vn/api/Users/deleteUser?id=${id}`,
    "DELETE",
    null
  );
};
