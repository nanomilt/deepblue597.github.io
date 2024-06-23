import styles from "../styles/ResumePage.module.css";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const myResume = "./Resume.pdf";

const ResumePage = () => {
  return (
    <>
      <iframe
        src="https://drive.google.com/file/d/1W00s_CV-3JZUeMpyp6jGVcWRggazIm_6/preview"
        width="893.8799999999999"
        height="1264.68"></iframe>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Resume" },
  };
}

export default ResumePage;
