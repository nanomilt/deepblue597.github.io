import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Iasonas Kakandri's Profolio." />
      <meta
        name="keywords"
        content="iasonas kakandris, iasonas, kakandris, electrical and computer engineer, iasonas kakandris portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Iasonas Kakandris's Portfolio" />
      <meta property="og:description" content="I Kakandris's Profolio." />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Iasonas Kakandris",
};
