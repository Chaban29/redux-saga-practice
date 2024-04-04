import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rootReducer/rootReducer';
import { deleteUserAction, getUsersAction } from '../../reducers/usersReducer';

export const Users: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleDeleteUser = useCallback(
    (userId: number) => {
      dispatch(deleteUserAction(userId));
    },
    [dispatch]
  );
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>
              Delete user
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(getUsersAction())}>
        Added users from server
      </button>
    </div>
  );
};
