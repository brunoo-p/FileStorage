import { LoginRequest } from '../domain/auth/loginRequest';

export interface IAuthFacade {
  signIn: (login: LoginRequest) => Promise<any>;
}
