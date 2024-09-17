import { AuthPage } from "@components/auth-page";
import DefaultLayout from "@layouts/default-layout";
import { authProviderServer } from "@providers/auth-provider";
import {Spin } from "antd";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function IndexPage() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/dashboard");
  }

  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            minHeight: "65vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      }
    >
      <DefaultLayout
        title={"Register - linkavet.com Account Register"}
        description={"Sign up to access your account at linkavet.com"}
        keywords="linkavet, register, authentication"
      >
        <AuthPage type="register" title={""} />
      </DefaultLayout>
    </Suspense>
  );
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
