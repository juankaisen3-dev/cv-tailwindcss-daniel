import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SiGithub, SiWhatsapp, SiTelegram } from 'react-icons/si'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const links = [
  {
    icon: <HiOutlineMail />,
    label: 'Email',
    value: 'juankaisen3@email.com',
    href: 'mailto:juankaisen3@email.com',
    color: '#fbbf24',
  },
  {
    icon: <HiOutlinePhone />,
    label: 'Téléphone',
    value: '+241 74 08 57 72',
    href: 'tel:+24174085772',
    color: '#22c55e',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
    value: 'github.com/juankaisen3-dev',
    href: 'https://github.com/juankaisen3-dev',
    color: '#e2e8f0',
  },
  {
    icon: <SiWhatsapp />,
    label: 'WhatsApp',
    value: '+241 074 08 57 72',
    href: 'https://wa.me/241074085772',
    color: '#22c55e',
  },
  {
    icon: <SiTelegram />,
    label: 'Telegram',
    value: '@ikchigo56',
    href: 'https://t.me/ikchigo56',
    color: '#38bdf8',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" ref={ref}
      style={{
        padding: '100px 24px 80px',
        background: 'linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(255,204,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 10 }}>
            TRAVAILLONS ENSEMBLE
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: 16 }}>Contact</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Disponible immédiatement pour des opportunités en <strong style={{ color: 'var(--gold)' }}>CDI, CDD</strong> ou <strong style={{ color: 'var(--gold)' }}>Freelance</strong> — Local &amp; Remote.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="contact-grid">
          {links.map(({ icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '18px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                transition: 'border-color 0.2s, box-shadow 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.boxShadow = `0 0 20px ${color}22`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: 22, color, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500, wordBreak: 'break-all' }}>
                  {value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 60, color: 'var(--muted)', fontSize: '0.8rem' }}>
          <div style={{ marginBottom: 8 }}>
            © 2025 <span style={{ color: 'var(--gold)' }}>Oyougou Daniel Israël</span> · Daniel_Tech&amp;Verse
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', opacity: 0.5 }}>
            Built with React · Framer Motion · react-icons
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
