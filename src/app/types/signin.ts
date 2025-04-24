export interface Signin {
  email: string;
  passWord: string;
}

export interface User {
  id: number;
  email: string;
  avatar: string;
  phoneNumber: string;
  name: string;
  accessToken: string;
}
