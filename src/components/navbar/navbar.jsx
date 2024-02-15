"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.menu_btn}>
        <Image
          src="/icon-hamburger.svg"
          alt="Menu Button"
          fill
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className={styles.mobile_menu_container}>
          <div className={styles.close_menu_btn}>
            <Image
              src="/icon-close.svg"
              alt=""
              fill
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className={styles.links}>
            {links.map((link) => (
              <Link href={link.path} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className={styles.logo_container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" fill />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
