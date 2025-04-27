import { Signin, Signup, UpdateUser } from "../types/user";
import { https } from "./config";

export const signinService = async (data: Signin) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signin",
    "POST",
    data
  );
};

export const signupService = async (data: Signup) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signup",
    "POST",
    data
  );
};

export const getUserService = async (keyword: string | undefined) => {
  return https(
    `https://jiranew.cybersoft.edu.vn/api/Users/getUser?keyword=${
      keyword || ""
    }`,
    "GET",
    null
  );
};

export const updateUserService = (data: UpdateUser) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/editUser",
    "PUT",
    data
  );
};
