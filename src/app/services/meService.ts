import { Profile, Signin, Signup } from "../types/me";
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

export const updateProfileService = (data: Profile) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/editUser",
    "PUT",
    data
  );
};
