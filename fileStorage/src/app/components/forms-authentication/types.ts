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
  email: string,
  password: string,
  confirmPassword: string,
  cpf: string,
}
