import Image from "next/image";
import styles from "./shopPage.module.css";

const ShopPage = () => {
  return (
    <section className={styles.topSection}>
      <Image
        src="/desktop-image-hero-2.jpg"
        width={840}
        height={534}
        layout="responsive"
        className={styles.image}
      />
      <div className={styles.textSection}>
        <div className={styles.text}>
          <h1>We are available all across the globe!</h1>
          <p>
            With stores all over the world it's easy for you to find furniture
            for your home or place of business. Locally, we're in most major
            cities throught the country. Find the branch nearest you using our
            store locator.Any questions?Don't hesitate to contact us today!
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

export default ShopPage;
