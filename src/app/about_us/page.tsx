import AuthorBio from "../../components/author-bio/author-bio";
import HelloMsg from "../../components/hello-msg/hello-msg";
import AboutImg from "../../assets/images/about_me.svg";

export default function IndexPage() {
  return (
    <>
      <HelloMsg />
      <AuthorBio />
      <img
        src={AboutImg}
        style={{ width: "280px", maxWidth: "60%" }}
        alt="About me"
      />
    </>
  );
}