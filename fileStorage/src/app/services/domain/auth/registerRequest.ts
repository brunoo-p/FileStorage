import { Email } from "./credential/email";
import { Password } from "./credential/password";
import { Contact } from './credential/contact';
import { CPF } from './credential/cpf';

export class RegisterRequest {
  public firstName: string;
  public lastName: string;
  public email: Email;
  public password: Password;
  public contact: Contact;
  public cpf: CPF;

  constructor(
    firstName: string,
    lastName: string,
    email: Email,
    password: Password,
    contact: Contact,
    cpf: CPF
  ) {

    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.contact = contact,
    this.cpf = cpf
  }

}
