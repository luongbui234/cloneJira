export interface Signin {
  email: string;
  passWord: string;
}

export interface Signup {
  email: string;
  passWord: string;
  name: string;
  phoneNumber: string;
}

export interface Me {
  id: number;
  email: string;
  avatar: string;
  phoneNumber: string;
  name: string;
  accessToken: string;
}

export interface Profile {
  id: number;
  passWord: string;
  email: string;
  name: string;
  phoneNumber: string;
}
