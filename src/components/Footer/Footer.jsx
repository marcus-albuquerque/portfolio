import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <nav className={styles.links}>
            <a href="#hero">Início</a>
            <a href="#about">Sobre</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>

          <a href="#hero" className={styles.backToTop}>
            ↑ Voltar ao topo
          </a>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Marcus Albuquerque. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
