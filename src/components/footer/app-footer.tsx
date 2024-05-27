import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      Made with ❤️ by
      <Typography.Link href="https://github.com/ayeahgodlove" target="_blank">
        {" Cumi"}
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
