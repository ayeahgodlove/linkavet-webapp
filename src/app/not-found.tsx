"use client";

// import { ErrorComponent } from "@refinedev/antd";
// import { Authenticated } from "@refinedev/core";
import { Button, Image, Result } from "antd";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function NotFound() {
  const router = useRouter()
  return (
    <Suspense>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Result
          // status="404"
          title="404"
          icon={<Image src="./honey-man.png" alt="404 icon for page" />}
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={() => router.back()}>
              Back Home
            </Button>
          }
        />
      </div>
      {/* <Authenticated key="not-found">
        <ErrorComponent />
      </Authenticated> */}
    </Suspense>
  );
}
