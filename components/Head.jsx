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
      <meta property="og:description" content="Iasonas Kakandris's Profolio." />
      {/* <meta property="og:image" content="public\homepage.png" /> */}
      {/* <meta property="og:url" content="" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Iasonas Kakandris",
};
