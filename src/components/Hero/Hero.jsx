import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Halo, Perkenalkan saya karel</h1>
        <p className={styles.description}>
        Saya seorang mahasiswa dan Web Developer yang tertarik mempelajari teknologi terbaru, desain responsif, serta teknik coding yang efisien. Saya terus berusaha mengembangkan keterampilan agar dapat menjadi developer handal.
        </p>
        <a href="mailto:karelxyz212@gmail.com" className={styles.contactBtn}>
          Hubungi saya
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
