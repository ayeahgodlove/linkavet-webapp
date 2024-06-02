"use client";
import Link from "next/link";
import SuperThank from "../../assets/images/super_thank_you.svg";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <PageContent>
        <h2>
          🥰 Thanks for your order. Return <Link href="/"> home page</Link>.
        </h2>
        <img
          src={SuperThank}
          style={{ width: "280px", maxWidth: "60%" }}
          alt="Thank you"
        />
      </PageContent>
    </DefaultLayout>
  );
}
