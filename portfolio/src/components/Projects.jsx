import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SiPython, SiReact, SiNodedotjs, SiTailwindcss, SiTelegram } from 'react-icons/si'
import { TbBrain, TbExternalLink } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'

const projects = [
  {
    id: 'alva',
    name: 'Alva_AI',
    sub: 'Modèle d\'IA Avancé & Assistant Cyber-Sécurité',
    desc: 'Conception et déploiement d\'un modèle d\'intelligence artificielle avancé exploitant les architectures GPT et Gemini. Module hacking éthique avec système de traitement étendu pour des analyses de sécurité approfondies.',
    tags: ['Python', 'LLM', 'GPT', 'Cybersécurité'],
    icons: [<SiPython />, <TbBrain />, <MdSecurity />],
    color: '#f472b6',
    bullets: [
      'Architecture GPT & Gemini intégrée',
      'Apprentissage adaptatif multi-domaine',
      'Module hacking éthique & audit de vulnérabilités',
    ],
    year: '2024',
  },
  {
    id: 'animeflow',
    name: 'Animeflow & WinStream',
    sub: 'Plateformes de Streaming Multimédia',
    desc: 'Développement d\'interfaces utilisateurs immersives et entièrement responsives. Interconnexion dynamique avec l\'API TMDB pour la récupération en temps réel de métadonnées de films et séries.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'TMDB API'],
    icons: [<SiReact />, <SiNodedotjs />, <SiTailwindcss />],
    color: '#22d3ee',
    bullets: [
      'SPA React avec navigation fluide',
      'API TMDB — récupération temps réel',
      'Optimisation des flux vidéo & performances',
    ],
    year: '2024',
  },
  {
    id: 'bots',
    name: 'Aizen_bot & Tiktokdanielbot',
    sub: 'Écosystème d\'Automatisation Telegram',
    desc: 'Aizen_bot : agent conversationnel Python capable d\'exécuter des requêtes de téléchargement (vidéos, musiques, films). Tiktokdanielbot : identification et téléchargement via l\'API Shazam à partir d\'un extrait vocal.',
    tags: ['Python', 'Telegram API', 'Shazam API', 'Scraping'],
    icons: [<SiPython />, <SiTelegram />],
    color: '#38bdf8',
    bullets: [
      'Téléchargement multi-plateforme (YT, IG, TikTok)',
      'Identification audio via Shazam API',
      'Moteur de recherche par titre intégré',
    ],
    year: '2023',
  },
  {
    id: 'juanverse',
    name: 'JUANverse Console & Badges',
    sub: 'Système d\'Identité Digitale Modulaire',
    desc: 'Système modulaire pour avatars, fiches et notifications stylisées. Création d\'identités digitales clés-en-main : badges personnalisés, fiches clanique et branding visuel cohérent.',
    tags: ['React', 'Node.js', 'Design Système'],
    icons: [<SiReact />, <SiNodedotjs />],
    color: '#fbbf24',
    bullets: [
      'Système de badges & fiches modulaires',
      'Branding clanique personnalisé',
      'Notifications stylisées & avatars',
    ],
    year: '2023',
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--surface)',
        border: `1px solid var(--border)`,
        borderRadius: 16,
        padding: '28px 28px',
        cursor: 'pointer',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.color
        e.currentTarget.style.boxShadow = `0 0 32px ${project.color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: 0.7,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {project.icons.map((icon, i) => (
                <span key={i} style={{ fontSize: 20, color: project.color }}>{icon}</span>
              ))}
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
              {project.year}
            </span>
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
            {project.name}
          </h3>
          <p style={{ fontSize: '0.82rem', color: project.color, fontWeight: 600, marginBottom: 12 }}>
            {project.sub}
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            {project.desc}
          </p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--muted)', fontSize: 18, flexShrink: 0, marginTop: 4 }}>
          ↓
        </motion.span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.86rem', color: '#c0d8ea' }}>
                    <span style={{ color: project.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: 20,
                    fontSize: '0.72rem', fontWeight: 600,
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}44`,
                    color: project.color,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 24px', maxWidth: 960, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 10 }}>
          CE QUE J'AI CONSTRUIT
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Projets Majeurs</h2>
        <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: '0.9rem' }}>
          Clique sur un projet pour voir les détails
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 20 }}
        className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
