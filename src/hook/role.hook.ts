import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { RoleService } from "../services/role.service";
import { RootState } from "@store/store";
import { emptyRole, IRole } from "@model/role.model";
import { addRoleSuccess, editRoleSuccess, fetchRolesAsync, setActiveRole } from "@store/slice/role.slice";

const useRole = () => {
  const roles = useSelector<RootState, IRole[]>((state) => state.role.roles);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.role.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.role.initialFetch
  );
  const role = useSelector<RootState, IRole>((state) => state.role.role);

  const dispatch = useDispatch();

  const loadRoles = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchRolesAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addRole = async (role: IRole) => {
    return await RoleService.create(role)
      .then((roleResponse) => {
        dispatch(addRoleSuccess(roleResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const setRole = (role: IRole) => {
    dispatch(setActiveRole(role));
  };

  const getRole = (roleId: string) => {
    const role = roles.find((p) => p.id === roleId);
    if (!role) {
      return emptyRole;
    }
    return role;
  };

  const editRole = async (role: IRole) => {
    return await RoleService.update(role)
      .then((roleResponse) => {
        dispatch(editRoleSuccess(roleResponse.data));
        setRole(roleResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  useEffect(() => {
    // loadRoles();
  }, [role, roles, isLoading, initialFetch]);

  return {
    role,
    roles,
    isLoading,
    initialFetch,
    addRole,
    editRole,
    setRole,
    getRole
  };
};

export { useRole };
