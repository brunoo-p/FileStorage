import { RegisterRequest } from './../domain/auth/registerRequest';
import { LoginRequest } from '../domain/auth/loginRequest';

export interface IAuth {
  signIn: (login: LoginRequest) => Promise<any>;
  signUp: (register: RegisterRequest) => Promise<any>;
}
