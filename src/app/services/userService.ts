import { User } from "../types/user";
import { https } from "./config";

export const getUserService = async (keyword: string | number | undefined) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Users/getUser?keyword=${
      keyword || ""
    }`,
    "GET",
    null
  );
};

export const updateUserService = (data: User) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/editUser",
    "PUT",
    data
  );
};

export const deleteUserService = (id: number) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Users/deleteUser?id=${id}`,
    "DELETE",
    null
  );
};
