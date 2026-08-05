import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SiWhatsapp } from 'react-icons/si'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const fade = (dir = 'left') => ({
  hidden: { opacity: 0, x: dir === 'left' ? -40 : 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
})

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} style={{ padding: '100px 24px', maxWidth: 960, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 10 }}>
          QUI SUIS-JE ?
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Profil</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 56, alignItems: 'center' }}
        className="about-grid">
        {/* Photo */}
        <motion.div variants={fade('left')} initial="hidden" animate={inView ? 'show' : 'hidden'}
          style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: -4,
            background: 'linear-gradient(135deg, var(--gold), var(--blue))',
            borderRadius: '50%', zIndex: 0,
          }} />
          <img src="/avatar.jpg" alt="Daniel Israël" style={{
            width: 200, height: 200, borderRadius: '50%', objectFit: 'cover',
            position: 'relative', zIndex: 1, border: '4px solid var(--bg)',
            display: 'block',
          }} />
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: 8, right: -12,
              background: 'var(--bg3)', border: '1px solid var(--gold)',
              borderRadius: 20, padding: '4px 12px',
              fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)',
              zIndex: 2, whiteSpace: 'nowrap',
            }}>
            ⚡ Dispo immédiate
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div variants={fade('right')} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <p style={{ color: '#c0d8ea', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: 28 }}>
            Développeur Full-Stack de <strong style={{ color: 'var(--gold)' }}>20 ans</strong>, propulsé par un apprentissage autodidacte rigoureux
            et une passion absolue pour l'informatique. Spécialisé dans la conception d'architectures back-end robustes,
            l'intégration d'APIs complexes <span style={{ color: 'var(--blue)' }}>(TMDB, IA, Webhooks)</span> et le développement
            d'interfaces front-end modernes. Expert en automatisation via la création de bots intelligents
            et l'implémentation de solutions basées sur l'<strong style={{ color: 'var(--gold)' }}>Intelligence Artificielle</strong> et la cybersécurité.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {[
              { icon: <HiOutlineLocationMarker />, label: 'Akanda, Gabon' },
              { icon: <HiOutlinePhone />,         label: '+241 74 08 57 72' },
              { icon: <HiOutlineMail />,          label: 'juankaisen3@email.com' },
              { icon: <SiWhatsapp />, label: '+241 074 08 57 72', link: 'https://wa.me/241074085772' },
            ].map(({ icon, label, link }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.87rem', color: 'var(--muted)' }}>
                <span style={{ color: 'var(--gold)', fontSize: 15, flexShrink: 0 }}>{icon}</span>
                {link ? <a href={link} target="_blank" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>{label}</a> : label}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['Français — natif', 'Anglais — technique'].map(l => (
              <span key={l} style={{
                padding: '4px 14px', border: '1px solid var(--border)',
                borderRadius: 20, fontSize: '0.78rem', color: 'var(--muted)',
                background: 'var(--surface)',
              }}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; justify-items: center; text-align: center; }
        }
      `}</style>
    </section>
  )
}
