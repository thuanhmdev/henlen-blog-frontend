export enum EGENDER {
  MALE,
  FEMALE,
}
export type TUser = {
  id: string;
  name: string;
  email: string;
  gender: EGENDER;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TResponseUserLogin = {
  user: TUser;
  accessToken: string;
};
