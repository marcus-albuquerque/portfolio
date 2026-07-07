import styles from './Contact.module.css'

import emailIcon from '../../assets/icons/email.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import githubIcon from '../../assets/icons/github.svg'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">
          Vamos <span>Conversar?</span>
        </h2>

        <div className={styles.grid}>
          {/* E-MAIL */}
          <a 
            href="mailto:barbosadealbuquerque@gmail.com"
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <img src={emailIcon} alt="E-mail" className={styles.icon} />
              <strong>E-mail</strong>
              <p>barbosadealbuquerque@gmail.com</p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a 
            href="https://wa.me/5521991293045" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.whatsapp}`}
          >
            <div className={styles.cardContent}>
              <img src={whatsappIcon} alt="WhatsApp" className={styles.icon} />
              <strong>WhatsApp</strong>
              <p>Clique para conversar</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a 
            href="https://www.linkedin.com/in/marcus-albuquerque-b3766b214/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
              <strong>LinkedIn</strong>
              <p>Conecte-se comigo</p>
            </div>
          </a>

          {/* GITHUB */}
          <a 
            href="https://github.com/marcus-albuquerque" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <img src={githubIcon} alt="GitHub" className={styles.icon} />
              <strong>GitHub</strong>
              <p>Veja meus projetos</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}