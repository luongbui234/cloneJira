import { Signin, Signup } from "../types/me";
import { CreateProject, EditProject } from "../types/project";

export const CYBER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";

export const getLocalStorage = () => {
  let meJson: string | null = null;

  if (typeof window !== "undefined" && window.localStorage) {
    // kiểm tra trong môi trường có localStorage không?
    meJson = localStorage.getItem("ME");
  }
  const me = meJson ? JSON.parse(meJson) : ""; // JSON.parse() => không parse giá trị null
  return me;
};

export const https = async (
  url: string,
  method: string,
  body: null | Signin | Signup | CreateProject | EditProject
) => {
  const options = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json", // Thông báo cho server biết định dạng của dữ liệu
      TokenCybersoft: CYBER_TOKEN,
      Authorization: `Bearer ${getLocalStorage()?.accessToken}`,
    },
    //spread syntax
    ...(body &&
    method.toUpperCase() !== "GET" &&
    method.toUpperCase() !== "DELETE"
      ? { body: JSON.stringify(body) }
      : {}),
  };

  try {
    const res = await fetch(url, options);
    const newRes = await res.json();
    return newRes;
  } catch (error) {
    console.log("error: ", error);
  }
};
