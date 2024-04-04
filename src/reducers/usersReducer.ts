import { IUser, TypeUsersActions, UsersActions } from '../types/users-types';

const initialState: IUser[] = [];

export const usersReducer = (
  state = initialState,
  action: TypeUsersActions
) => {
  switch (action.type) {
    case UsersActions.SETUSERS:
      return action.payload;
    case UsersActions.DEELTEUSER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export const setUsersAction = (payload: IUser[]) => ({
  type: UsersActions.SETUSERS,
  payload,
});

export const getUsersAction = () => ({ type: UsersActions.GETUSERS });

export const deleteUserAction = (payload: number) => ({
  type: UsersActions.DEELTEUSER,
  payload,
});
