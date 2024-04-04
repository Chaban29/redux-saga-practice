export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export type TypeUsers = IUser[];

export const enum UsersActions {
  SETUSERS = 'users/setUsers',
  GETUSERS = 'users/getUsers',
  DEELTEUSER = 'users/delete',
}

export type TypeUsersActions =
  | { type: UsersActions.SETUSERS; payload: IUser[] }
  | { type: UsersActions.GETUSERS; payload: IUser[] }
  | { type: UsersActions.DEELTEUSER; payload: number };
