import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useRole } from "./role.hook";
import { useUserRole } from "./user-role.hook";
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

  const { roles } = useRole();
  const { userRoles } = useUserRole();
  function getUsersByRole(roleName: string) {
    // Find the role id corresponding to the given role name
    const roleId = roles.find((role) => role.name === roleName)?.id;

    if (roleId) {
      const usersWithRole = userRoles
        .filter((userRole) => userRole.roleId === roleId)
        .map((userRole) => users.find((user) => user.id === userRole.userId));

      return usersWithRole;
    }
    // Filter users based on the roleId

    return [];
  }

  const userCount = users.length;
  useEffect(() => {
    // loadUsers();
  }, [user, users]);

  return {
    user,
    users,
    setUser,
    getUser,
    getUsersByRole,
    userCount,
  };
};

export { useUser };
