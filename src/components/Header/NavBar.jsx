import { useState, useEffect, useRef } from 'react'
import styles from './NavBar.module.css'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0 })
  const linkRefs = useRef([])
  const navRef = useRef(null)

  useEffect(() => {
    const sections = links.map((link) => link.href.replace('#', ''))

    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50

      let currentIndex = 0

      if (isAtBottom) {
        currentIndex = sections.length - 1
      } else {
        for (let i = 0; i < sections.length; i++) {
          const el = document.getElementById(sections[i])
          if (el) {
            const nextEl = document.getElementById(sections[i + 1])
            const nextTop = nextEl ? nextEl.offsetTop : Infinity

            if (scrollY >= el.offsetTop - 50 && scrollY < nextTop - 50) {
              currentIndex = i
              break
            }
          }
        }
      }

      if (currentIndex !== activeIndex) {
        setActiveIndex(currentIndex)
      }
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [activeIndex])

  useEffect(() => {
    const updateBubble = () => {
      const activeLink = linkRefs.current[activeIndex]
      const nav = navRef.current

      if (activeLink && nav) {
        const navRect = nav.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()

        setBubbleStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        })
      }
    }

    updateBubble()
    window.addEventListener('resize', updateBubble)
    return () => window.removeEventListener('resize', updateBubble)
  }, [activeIndex])

  const handleClick = (href, index) => {
    setActiveIndex(index)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.navBackground}>
          <ul className={styles.navList}>
            <span
              className={styles.bubble}
              style={{
                left: bubbleStyle.left,
                width: bubbleStyle.width,
              }}
            />

            {links.map((link, index) => (
              <li key={link.href} className={styles.navItem}>
                <a
                  ref={(el) => (linkRefs.current[index] = el)}
                  href={link.href}
                  className={activeIndex === index ? styles.active : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(link.href, index)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}