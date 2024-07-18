import { ThemedLayout } from "@components/themed-layout";
import { authProviderServer } from "@providers/auth-provider";
import { useDashboardMenu } from "@utils/dashboard-menus";
import { Col, Row } from "antd";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();
  const { dashboardMenus } = useDashboardMenu();

  if (!data.authenticated) {
    return redirect(data?.redirectTo || "/login");
  }

  return (
    <ThemedLayout>
      <Row justify={"center"} align={"top"}>
        <Col xs={22} md={18}>
          {children}
        </Col>
      </Row>
    </ThemedLayout>
  );
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  const user = await fetchUserIdentity(authProviderServer);

  return {
    authenticated,
    redirectTo,
    user,
  };
}

async function fetchUserIdentity(authProvider: any) {
  if (authProvider && typeof authProvider.getIdentity === "function") {
    try {
      const userIdentity = await authProvider.getIdentity();
      if (userIdentity) {
        return userIdentity;
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  } else {
    return null;
  }
}
