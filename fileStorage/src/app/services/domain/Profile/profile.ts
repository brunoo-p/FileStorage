import { Email } from '../auth/credential/email';
import { CPF } from '../auth/credential/cpf';

export class Profile {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: Email;
  public cpf: CPF;
  public isActive: boolean;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: Email,
    cpf: CPF,
    isActive: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cpf = cpf;
    this.isActive = isActive
  }

}
