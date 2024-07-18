"use client";

import { CanParams, CanReturnType } from "@refinedev/core";

export const accessControlProviderQuery = (
  userRoles: string[],
  routeItems: any["items"]
): any => {
  const canFunction = async ({ resource, action }: CanParams) => {
    // Implement your authorization logic here
    // This example checks for a hypothetical "role" in user data
    const hasRequiredRole = routeItems.filter((item: any) =>
      item.roles.some((sysRole: string) => {
        const permissionList = {
          list: userRoles.includes(sysRole),
          create: userRoles.includes(sysRole),
          edit: userRoles.includes(sysRole),
          delete: userRoles.includes(sysRole),
        };
        const permissions: any = {
          dashboard: { list: userRoles.includes(sysRole) },
          posts: permissionList,
          users: permissionList,
          categories: permissionList,
          tags: permissionList,
          products: permissionList,
          reviews: permissionList,
          stores: permissionList,
          roles: permissionList,
          userRoles: permissionList,
          events: permissionList,
        };
        return (
          (permissions[resource!] && permissions[resource!][action]) || false
        );
      })
    );
    return hasRequiredRole;
  };
  return {
    can: canFunction,
  };
};

export const accessControlProviderV2 = (userRoles: string[]) => {
  // Implement your authorization logic here
  // This example checks for roles in user data
  const hasRequiredRole = (resource: string, action: string) => {
    const permissions: any = {
      dashboard: { list: true },
      posts: { list: true, create: userRoles.includes("ADMIN") },
      users: { list: userRoles.includes("ADMIN"), edit: false, delete: false },
      // Add permissions for other resources here
    };

    return permissions[resource] && permissions[resource][action];
  };

  return {
    can: async (params: CanParams): Promise<CanReturnType> => {
      const { resource, action } = params;
      return Promise.resolve(hasRequiredRole(resource!, action));
    },
  };
};
