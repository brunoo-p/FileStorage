import { Email } from './credential/email';
import { Password } from './credential/password';

export class LoginRequest {

  constructor(
    public email: Email,
    public password: Password
  ) {}

}
