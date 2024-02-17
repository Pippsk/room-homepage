import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import MobileMenu from "../mobileMenu/mobileMenu";
import { links } from "@/data/links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <MobileMenu className={styles.mobileMenu} />

        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={50} height={12} />
        </Link>

        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link key={link.title} href={link.path} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
