export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserAuthResponse {
  access_token: string;
  user: {
    firstName: string;
    lastName: string;
    id: string;
    email: string;
    password: string;
  };
}

export interface LoginUserRequest {
  email: string;
  password: string;
}
