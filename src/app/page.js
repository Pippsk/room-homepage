import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/desktop-image-hero-1.jpg"
          alt=""
          fill
          quality={100}
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life.Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love
        </p>
        <Link href="/shop">
          <span>shop now</span>{" "}
          <Image src="/icon-arrow.svg" width={30} height={10} />
        </Link>
      </div>
    </div>
  );
}
