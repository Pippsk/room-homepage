import Image from "next/image";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.topSection}>
      <Image
        src="/desktop-image-hero-3.jpg"
        width={840}
        height={534}
        layout="responsive"
        className={styles.image}
      />
      <div className={styles.textSection}>
        <div className={styles.text}>
          <h1>manufactured with the best materials</h1>
          <p>
            Our modern furniture store provides a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistatnt ass possible. With
            three decades of experience in this indusrty, we understand what
            customers want for their home and office
          </p>
          <button className={styles.shopNowBtn}>
            Shop now{" "}
            <Image src="/icon-arrow.svg" alt="" width={30} height={10} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
