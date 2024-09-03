"use client";
import Link from "next/link";
import SuperThank from "../../assets/images/super_thank_you.svg";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import Image from "next/image";

export default function IndexPage() {
  return (
    <DefaultLayout
      title={"Store - LinkaVet | Quality Pet Products"}
      description={
        "Shop high-quality pet products at LinkaVet. From pet food to accessories, find everything your pet needs in our online store."
      }
      keywords="pet products, veterinary store, LinkaVet store, pet food, pet accessories, buy pet supplies"
      uri="store"
    >
      <PageContent>
        <h2>
          🥰 Thanks for your order. Return <Link href="/"> home page</Link>.
        </h2>
        <Image
          src={SuperThank}
          style={{ width: "280px", maxWidth: "60%" }}
          alt="Thank you"
        />
      </PageContent>
    </DefaultLayout>
  );
}
