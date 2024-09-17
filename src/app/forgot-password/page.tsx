import { AuthPage } from "@components/auth-page";
import DefaultLayout from "@layouts/default-layout";
import { authProviderServer } from "@providers/auth-provider";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function IndexPage() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/");
  }

  return (
    <>
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
          title={"Forgot Password - linkavet.com Password Reset"}
          description={"Reset your linkavet.com account account"}
          keywords="linkavet, forgot-password, reset"
        >
          <AuthPage type="forgotPassword" title={""} />
        </DefaultLayout>
      </Suspense>
    </>
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
