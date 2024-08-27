import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "@store/store";
import { emptyUser, IUser } from "@model/user.model";
import { setUser } from "@store/slice/user.slice";

const useUser = () => {
  const users = useSelector<RootState, IUser[]>((state) => state.user.users);

  const user = useSelector<RootState, IUser>((state) => state.user.user);

  const dispatch = useDispatch();

  const setActiveUser = (user: IUser) => {
    dispatch(setUser(user));
  };

  const getUser = (userId: string) => {
    const user = users.find((p) => p.id === userId);
    if (!user) {
      return emptyUser;
    }
    return user;
  };

  const userCount = users.length;
  useEffect(() => {
    // loadUsers();
  }, [user, users]);

  return {
    user,
    users,
    setUser,
    getUser,
    userCount,
  };
};

export { useUser };
