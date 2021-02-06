export interface UserCreateRequestData {
  login: string;
  password: string;
  name: string;
  surname: string;
  description: string;
}

export interface UserUpdateRequestData {
  name?: string;
  surname?: string;
  description?: string;
}