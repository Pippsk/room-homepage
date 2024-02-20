import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.bottomSection}>
      <Image
        src="/image-about-dark.jpg"
        alt=""
        width={840}
        height={534}
        layout="responsive"
      />
      <div className={styles.aboutSection}>
        <h1>About our furniture</h1>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space
        </p>
      </div>
      <Image
        src="/image-about-light.jpg"
        alt=""
        width={440}
        height={266}
        layout="responsive"
      />
    </section>
  );
};

export default Footer;
