import styles from './Projects.module.css'

function ProjectCard({ title, description, tech, link, repo }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3>{title}</h3>
          <div className={styles.tech}>
            {tech.map((t) => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Conteúdo que aparece no hover */}
        <div className={styles.details}>
          <p>{description}</p>
          <div className={styles.links}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
               Projeto
            </a>
            <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              Repositório
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard