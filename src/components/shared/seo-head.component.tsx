import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  uri?: string;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "",
  image = "/logo/logo-2-removebg-preview.png",
  uri = "",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={"https://www.linkavet.com/" + uri} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
