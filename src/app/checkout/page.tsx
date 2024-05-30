import Link from "next/link";
import SuperThank from "../../assets/images/super_thank_you.svg";

export default function IndexPage() {
  return (
    <div>
      <h2>
        🥰 Thanks for your order. Return <Link href="/"> home page</Link>.
      </h2>
      <img
        src={SuperThank}
        style={{ width: "280px", maxWidth: "60%" }}
        alt="Thank you"
      />
    </div>
  );
};

