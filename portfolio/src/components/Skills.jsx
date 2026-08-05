import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiPython, SiNodedotjs, SiExpress, SiPhp,
  SiReact, SiHtml5, SiTailwindcss, SiFlutter,
  SiPostgresql, SiMysql, SiMongodb,
  SiDocker, SiGit, SiGithub, SiVercel, SiLinux, SiPostman,
  SiTelegram, SiYoutube, SiInstagram,
} from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'

const categories = [
  {
    label: 'Back-end & Automatisation',
    color: '#86efac',
    skills: [
      { name: 'Python',   icon: <SiPython />,   color: '#3b82f6' },
      { name: 'Node.js',  icon: <SiNodedotjs />, color: '#22c55e' },
      { name: 'Express',  icon: <SiExpress />,   color: '#e2e8f0' },
      { name: 'PHP',      icon: <SiPhp />,       color: '#a78bfa' },
    ],
  },
  {
    label: 'IA & Cybersécurité',
    color: '#fca5a5',
    skills: [
      { name: 'LLM / GPT',  icon: <TbBrain />,     color: '#f472b6' },
      { name: 'NLP',        icon: <TbBrain />,     color: '#a78bfa' },
      { name: 'Blue Team',  icon: <MdSecurity />,  color: '#22d3ee' },
      { name: 'Prompt Eng', icon: <TbBrain />,     color: '#fbbf24' },
    ],
  },
  {
    label: 'Front-end & Mobile',
    color: '#7ecfff',
    skills: [
      { name: 'React',     icon: <SiReact />,      color: '#22d3ee' },
      { name: 'HTML5',     icon: <SiHtml5 />,      color: '#f97316' },
      { name: 'CSS3',      icon: <SiHtml5 style={{opacity:0.7}} />, color: '#3b82f6' },
      { name: 'Tailwind',  icon: <SiTailwindcss />, color: '#06b6d4' },
      { name: 'Flutter',   icon: <SiFlutter />,    color: '#0ea5e9' },
    ],
  },
  {
    label: 'Bases de données',
    color: '#fbbf24',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#60a5fa' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#f97316' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#22c55e' },
    ],
  },
  {
    label: 'DevOps & Outils',
    color: '#c4b5fd',
    skills: [
      { name: 'Git',     icon: <SiGit />,    color: '#f97316' },
      { name: 'GitHub',  icon: <SiGithub />, color: '#e2e8f0' },
      { name: 'Docker',  icon: <SiDocker />, color: '#60a5fa' },
      { name: 'Vercel',  icon: <SiVercel />, color: '#e2e8f0' },
      { name: 'Linux',   icon: <SiLinux />,  color: '#fbbf24' },
      { name: 'Postman', icon: <SiPostman />,color: '#f97316' },
    ],
  },
  {
    label: 'Traitement Multimédia',
    color: '#86efac',
    skills: [
      { name: 'Shazam API',  icon: <TbBrain />,      color: '#ec4899' },
      { name: 'Telegram',    icon: <SiTelegram />,   color: '#38bdf8' },
      { name: 'YouTube API', icon: <SiYoutube />,    color: '#ef4444' },
      { name: 'Instagram',   icon: <SiInstagram />,  color: '#f43f5e' },
    ],
  },
]

function SkillCard({ name, icon, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.05 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        padding: '16px 12px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        cursor: 'default',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color
        e.currentTarget.style.boxShadow = `0 0 16px ${color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span style={{ fontSize: 28, color }}>{icon}</span>
      <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, textAlign: 'center', lineHeight: 1.3 }}>{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref}
      style={{ padding: '100px 24px', background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 10 }}>
            MON ARSENAL
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Compétences Techniques</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 4, height: 20, background: cat.color, borderRadius: 2 }} />
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: cat.color, letterSpacing: 1, textTransform: 'uppercase' }}>
                  {cat.label}
                </span>
              </motion.div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                gap: 10,
              }}>
                {cat.skills.map((s, si) => (
                  <SkillCard key={s.name} {...s} delay={ci * 0.05 + si * 0.04} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
