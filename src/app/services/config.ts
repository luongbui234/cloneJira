import { Signin, Signup } from "../types/signin";

export const CYBER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";

export const getLocalStorage = () => {
  let meJson: string | null = null;

  if (typeof window !== "undefined" && window.localStorage) {
    meJson = localStorage.getItem("ME");
  }
  const me = meJson ? JSON.parse(meJson) : "";
  return me;
};

export const https = async (
  url: string,
  method: string,
  body: Signin | Signup
) => {
  const options = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json", // Thông báo cho server biết định dạng của dữ liệu
      TokenCybersoft: CYBER_TOKEN,
      Authorization: `Bearer ${getLocalStorage()?.accessToken}`,
    },
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
