"use client";

import Image from "next/image";
import styles from "./mobileMenu.module.css";
import { links } from "@/data/links";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menuBtn}>
      <Image
        src="/icon-hamburger.svg"
        alt="menu-button"
        width={20}
        height={12}
        onClick={() => setIsOpen(true)}
        className={styles.menuBtn}
      />

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.mobileMenu}>
            <Image
              src="/icon-close.svg"
              alt="close-button"
              width={15}
              height={15}
              onClick={() => setIsOpen(false)}
              className={styles.menuBtn}
            />

            <div className={styles.linksContainer}>
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={styles.menuLinks}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
