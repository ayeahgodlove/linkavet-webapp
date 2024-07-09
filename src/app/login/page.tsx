import { AuthPage } from "@components/auth-page";
import { authProviderServer } from "@providers/auth-provider";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/dashboard");
  }

  return (
    <AuthPage
      type="login"
      title={
        <> 
          <Link href="/">
            <Image
              src={`/logo/logo-2-removebg-preview.png`}
              height={80}
              width={130}
              quality={100}
              alt="Cumi logo"
              style={{ marginRight: 15 }}
            />
          </Link>
        </>
      }
    />
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
