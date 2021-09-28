export enum AvailableAuthView {
    Register = 'Register',
    Login = 'Login',
    ForgotPassword = 'ForgotPassword'
}
export interface AuthView {
    name: string;
    component: React.ReactChild;
}
export interface LoginReq {
    mailAddress: string;
    password: string;
}
export interface RegisterReq extends LoginReq {
    fullName: string;
}
