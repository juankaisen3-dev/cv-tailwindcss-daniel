import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hero',     label: 'Accueil' },
  { href: '#about',    label: 'Profil' },
  { href: '#skills',   label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact',  label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px',
        background: scrolled ? 'rgba(8,14,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,204,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}
    >
      <a href="#hero" style={{ fontWeight: 700, color: 'var(--gold)', letterSpacing: 1, fontSize: '1rem' }}>
        D<span style={{ color: 'var(--text)', opacity: 0.6 }}>aniel</span>_<span style={{ color: 'var(--blue)' }}>Dev</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: 0.5,
              color: active === l.href.slice(1) ? 'var(--gold)' : 'var(--muted)',
              borderBottom: active === l.href.slice(1) ? '2px solid var(--gold)' : '2px solid transparent',
              paddingBottom: 2,
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="hamburger"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: 22, display: 'none' }}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'rgba(8,14,20,0.97)',
              borderBottom: '1px solid rgba(255,204,0,0.15)',
              padding: '16px 24px 24px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ color: active === l.href.slice(1) ? 'var(--gold)' : 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
