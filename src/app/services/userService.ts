import { Signin } from "../types/signin";
import { https } from "./config";

export const signinService = async (data: Signin) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signin",
    "POST",
    data
  );
};

export const signupService = async (data: Signin) => {
  return https(
    "https://jiranew.cybersoft.edu.vn/api/Users/signup",
    "POST",
    data
  );
};
