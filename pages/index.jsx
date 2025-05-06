import Link from "next/link";
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Hello</h1>
          <h1>There!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Iasonas Kakandris</h1>
            <h6 className={styles.bio}>
              Electrical and Computer Engineering student
            </h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.png"
                width={300}
                height={300}
                alt="Iasonas' Picture"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Illustration className={styles.illustration} /> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
