import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { UserRoleService } from "../services/user-role.service";
import { RootState } from "@store/store";
import { IUserRole } from "@model/user-role.model";
import { addUserRoleSuccess, editUserRoleSuccess, fetchUserRolesAsync, setActiveUserRole } from "@store/slice/user-role.slice";

const useUserRole = () => {
  const userRoles = useSelector<RootState, IUserRole[]>((state) => state.userRole.userRoles);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.userRole.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.userRole.initialFetch
  );
  const userRole = useSelector<RootState, IUserRole>((state) => state.userRole.userRole);

  const dispatch = useDispatch();

  const loadUserRoles = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchUserRolesAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addUserRole = async (userRole: IUserRole) => {
    return await UserRoleService.create(userRole)
      .then((userRoleResponse) => {
        dispatch(addUserRoleSuccess(userRoleResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const setUserRole = (userRole: IUserRole) => {
    dispatch(setActiveUserRole(userRole));
  };

  const editUserRole = async (userRole: IUserRole) => {
    return await UserRoleService.update(userRole)
      .then((userRoleResponse) => {
        dispatch(editUserRoleSuccess(userRoleResponse.data));
        setUserRole(userRoleResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  useEffect(() => {
    // loadUserRoles();
  }, [userRole, userRoles, isLoading, initialFetch]);

  return {
    userRole,
    userRoles,
    isLoading,
    initialFetch,
    addUserRole,
    editUserRole,
    setUserRole,
  };
};

export { useUserRole };
