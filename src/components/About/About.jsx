import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">
          Sobre <span>Mim</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Construo aplicações web com React, Python e Flask, do back ao
              front, sempre com foco em performance e código limpo. Já
              desenvolvi APIs robustas e interfaces dinâmicas para problemas
              reais.
            </p>
            <p>
              Minha abordagem vai além do código: aplico práticas de DevOps para
              manter deploys rápidos, estáveis e previsíveis.
            </p>
            <p>
              Acredito que tecnologia bem-feita é tecnologia que entrega valor.
            </p>
            <p>
              Gosto de desafios, aprender coisas novas e 
              transformar ideias em soluções que funcionam na prática.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+2</span>
              <span className={styles.statLabel}>Anos de experiência</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+10</span>
              <span className={styles.statLabel}>Projetos entregues</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+9</span>
              <span className={styles.statLabel}>Tecnologias dominadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
