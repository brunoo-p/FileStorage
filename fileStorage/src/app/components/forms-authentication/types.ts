export enum FormType {
  SignIn = 'SignIn',
  SignUp = 'SignUp'
}
export type KeyForm = keyof typeof FormType;

export type Login = {
  email: string,
  password: string
}
export type Register = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  phone: string,
  cpf: string,
}
