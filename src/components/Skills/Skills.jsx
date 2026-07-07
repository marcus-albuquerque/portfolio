import styles from './Skills.module.css'

// Importando os SVGs
import react from '../../assets/icons/react.svg'
import python from '../../assets/icons/python.svg'
import js from '../../assets/icons/js.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import mysql from '../../assets/icons/mysql.svg'
import mongodb from '../../assets/icons/mongodb.svg'
import github from '../../assets/icons/github.svg'
import php from '../../assets/icons/php.svg'

const skills = [
  { name: 'React', icon: react },
  { name: 'Python', icon: python },
  { name: 'JavaScript', icon: js },
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'MySQL', icon: mysql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Git', icon: github },
  { name: 'PHP', icon: php },
]

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">
          Minhas <span>Habilidades</span>
        </h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <img src={skill.icon} alt={skill.name} className={styles.icon} />
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills