import AuthorBio from "../../components/author-bio/author-bio";
import HelloMsg from "../../components/hello-msg/hello-msg";
import AboutImg from "../../assets/images/about_me.svg";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <DefaultLayout>
        <PageContent>
          <HelloMsg />
          <AuthorBio />
          <Image
            src={AboutImg}
            style={{ width: "280px", maxWidth: "60%" }}
            alt="About me"
            quality={100}
          />
        </PageContent>
      </DefaultLayout>
    </>
  );
}
