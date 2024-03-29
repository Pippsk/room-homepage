"use client";

import Image from "next/image";
import { slideData } from "@/data/slides";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slideData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(items.length);
    }
  };
  return (
    <>
      <section>
        {slideData.map((slide, index) => (
          <article
            key={slide.id}
            className={
              slideIndex === index + 1 ? styles.container : styles.hidden
            }
          >
            <div className={styles.imageContainer}>
              <Image
                src={slide.img}
                alt="Slide"
                width={840}
                height={534}
                layout="responsive"
                className={styles.image}
              />

              <div className={styles.arrows}>
                <button className={styles.left} onClick={prevSlide}>
                  <Image
                    src="/icon-angle-left.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </button>

                <button className={styles.right} onClick={nextSlide}>
                  <Image
                    src="/icon-angle-right.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </div>

            <div className={styles.textContainer}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <button className={styles.shopBtn}>
                Shop now{" "}
                <Image src="/icon-arrow.svg" alt="" width={30} height={10} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
