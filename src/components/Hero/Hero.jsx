import styles from "./Hero.module.css";
import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Desenvolvedor <br />
            <span className={styles.highlight}>Full Stack</span>
          </h1>

          <p className={styles.subtitle}>& entusiasta de automação</p>

          <p className={styles.description}>
            Construo aplicações web modernas, escaláveis e seguras.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <img src={logo} alt="Sua foto" className={styles.profileImage} />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
