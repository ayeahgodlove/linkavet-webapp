import { AuthPage } from "@components/auth-page";
import { authProviderServer } from "@providers/auth-provider";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Register() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/dashboard");
  }

  return (
    <AuthPage
      type="register"
      title={
        <>
          <Link href="/">
            <Image
              src={`/honeyman.png`}
              height={80}
              width={100}
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
