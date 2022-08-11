import { Contact } from './../auth/credential/contact';
import { Email } from "../auth/credential/email";

export class UserProfile {
  public firstName: string;
  public lastName: string;
  public email: Email;
  public contact: Contact;

  constructor(
    firstName: string,
    lastName: string,
    email: Email,
    contact: Contact,
  ) {

    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.contact = contact
  }

}
