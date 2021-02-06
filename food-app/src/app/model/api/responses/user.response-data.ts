export interface UserResponseData {
  user: {
      _id: string;
    login: string;
    password: string;
    name: string;
    surname: string;
    description: string;
  };
  token: {
    token: string;
  };
}