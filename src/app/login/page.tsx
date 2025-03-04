import { AuthPage } from "@components/auth-page";
import DefaultLayout from "@layouts/default-layout";
import { authProviderServer } from "@providers/auth-provider";
import { Spin } from "antd";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";

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
        title={"Login - linkavet.com Account Login"}
        description={"Log in to access your account at linkavet.com"}
        keywords="linkavet, login, authentication"
      >
        <AuthPage
          type="login"
          title={""}
          providers={[
            {
              name: "google",
              icon: <AiFillGoogleCircle />,
              label: "Sign in with Google",
            },
            {
              name: "github",
              icon: <AiFillFacebook />,
              label: "Sign in with Facebook",
            },
          ]}
        />
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
