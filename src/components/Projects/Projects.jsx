import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'Shape 404 - Guia de Exercícios PWA',
    description: 'PWA para acompanhamento de exercícios com React e Vite. Funciona offline, tem alarme de descanso e permite montar treinos personalizados.',
    tech: ['React', 'Vite', 'PWA', 'JavaScript'],
    link: 'https://marcus-albuquerque.github.io/shape-404',
    repo: 'https://github.com/marcus-albuquerque/shape-404'
  },
  {
    id: 2,
    title: 'To-Do App em React',
    description: 'Aplicação de tarefas moderna e responsiva com gerenciamento de estado dinâmico e componentes reutilizáveis.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://marcus-albuquerque.github.io/Notas',
    repo: 'https://github.com/marcus-albuquerque/Notas'
  },
  {
    id: 3,
    title: 'Ficção Interativa Inclusiva',
    description: 'Jogo de aventura narrativa com suporte a texto e áudio, desenvolvido para ser 100% acessível a pessoas com ou sem deficiência visual.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Godot'],
    link: 'https://marcus-albuquerque.github.io/pa_interactive_fiction',
    repo: 'https://github.com/marcus-albuquerque/pa_interactive_fiction'
  },
  {
    id: 4,
    title: 'Botão Flutuante de Acessibilidade',
    description: 'Ferramenta de UX inclusiva que adiciona controles de acessibilidade em tempo real a qualquer site.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://marcus-albuquerque.github.io/projeto_acessibilidade',
    repo: 'https://github.com/marcus-albuquerque/projeto_acessibilidade'
  },
  {
    id: 5,
    title: 'Página Pessoal com HTML, CSS e JS',
    description: 'Página web responsiva desenvolvida do zero com design limpo e boas práticas de desenvolvimento front-end.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://marcus-albuquerque.github.io/AT1',
    repo: 'https://github.com/marcus-albuquerque/AT1'
  },
  {
    id: 6,
    title: 'Tutor IA - Chatbot Educacional',
    description: 'Chat bot educacional que utiliza inteligência artificial para fornecer ajuda aos estudantes. Desenvolvido em PHP.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://marcus-albuquerque.github.io/AT1',
    repo: 'https://github.com/marcus-albuquerque/AT1'
  }
]

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">
          Meus <span>Projetos</span>
        </h2>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects