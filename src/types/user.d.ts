export {};
declare global {
  export enum EGENDER {
    MALE,
    FEMALE,
  }
  export type TUser = {
    id: string;
    name: string;
    email: string;
    gender: EGENDER;
    typeRole: string;
  };

  export type TLogin = {
    username: string;
    password: string;
  };

  export type TResponseUserLogin = {
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
}
