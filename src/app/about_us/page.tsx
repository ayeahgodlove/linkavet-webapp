import AuthorBio from "../../components/author-bio/author-bio";
import HelloMsg from "../../components/hello-msg/hello-msg";
import AboutImg from "../../assets/images/about_me.svg";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";

export default function IndexPage() {
  return (
    <>
      <DefaultLayout>
        <PageContent>
          <HelloMsg />
          <AuthorBio />
          <img
            src={AboutImg}
            style={{ width: "280px", maxWidth: "60%" }}
            alt="About me"
          />
        </PageContent>
      </DefaultLayout>
    </>
  );
}
