import { Profile, Signin, Signup } from "../types/me";
import { https } from "./config";

export const signinService = async (data: Signin) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signin",
    "POST",
    data
  );
};

export const signupService = async (data: Signup) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signup",
    "POST",
    data
  );
};

export const updateProfileService = async (data: Profile) => {
  return await https(
    "https://jiranew.cybersoft.edu.vn/api/Users/editUser",
    "PUT",
    data
  );
};
