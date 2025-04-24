import { Signin } from "../types/signin";

export const signinService = async (data: Signin) => {
  try {
    const res = await fetch(
      "https://jiranew.cybersoft.edu.vn/api/Users/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Thông báo cho server biết định dạng của dữ liệu
        },
        body: JSON.stringify(data),
      }
    );
    const newData = await res.json();
    return newData;
  } catch (err) {
    console.log("err: ", err);
  }
};
