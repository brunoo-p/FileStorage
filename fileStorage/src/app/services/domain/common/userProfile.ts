import { Email } from "../auth/credential/email";
import { Password } from "../auth/credential/password";

export class UserProfile {
  public firstName: string;
  public lastName: string;
  public email: Email;
  public password: Password;
  public phone: string;
  public cpf: string;

  constructor(
    firstName: string,
    lastName: string,
    email: Email,
    password: Password,
    phone: string,
    cpf: string
  ) {

    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.phone = phone,
    this.cpf = cpf
  }

}
