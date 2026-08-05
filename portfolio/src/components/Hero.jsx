import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

function Particles({ count = 55 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,204,0,${p.alpha})`
        ctx.fill()
      })
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,204,0,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(render)
    }
    render()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

const text = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,204,0,0.07) 0%, transparent 70%), var(--bg)',
        overflow: 'hidden', padding: '80px 24px 60px',
      }}
    >
      <Particles />

      {/* Glowing orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '8%', width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(126,207,255,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 780 }}>
        <motion.div custom={0} variants={text} initial="hidden" animate="show"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 20, opacity: 0.8 }}>
          &lt; PORTFOLIO /&gt;
        </motion.div>

        <motion.h1 custom={1} variants={text} initial="hidden" animate="show"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 0%, #ffcc00 50%, #7ecfff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            marginBottom: 16, letterSpacing: -1 }}>
          Oyougou Daniel Israël
        </motion.h1>

        <motion.div custom={2} variants={text} initial="hidden" animate="show"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--blue)', fontWeight: 600,
            letterSpacing: 1, marginBottom: 24, textTransform: 'uppercase' }}>
          Développeur Full-Stack · Backend · IA &amp; Automatisation
        </motion.div>

        <motion.p custom={3} variants={text} initial="hidden" animate="show"
          style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.75 }}>
          20 ans · Akanda, Gabon · Autodidacte passionné par l'IA, la cybersécurité et la création d'interfaces expressives.
        </motion.p>

        <motion.div custom={4} variants={text} initial="hidden" animate="show"
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects"
            style={{
              padding: '12px 32px', background: 'var(--gold)', color: '#080e14',
              fontWeight: 700, borderRadius: 8, fontSize: '0.9rem', letterSpacing: 0.5,
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 24px rgba(255,204,0,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(255,204,0,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(255,204,0,0.25)' }}
          >
            Voir mes projets
          </a>
          <a href="#contact"
            style={{
              padding: '12px 32px', border: '1px solid rgba(255,204,0,0.4)', color: 'var(--gold)',
              fontWeight: 600, borderRadius: 8, fontSize: '0.9rem', letterSpacing: 0.5,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dim)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div custom={5} variants={text} initial="hidden" animate="show"
          style={{ marginTop: 48, display: 'flex', gap: 24, justifyContent: 'center' }}>
          <a href="https://github.com/juankaisen3-dev" target="_blank"
            style={{ color: 'var(--muted)', fontSize: 22, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
            <SiGithub />
          </a>
          <a href="mailto:juankaisen3@email.com"
            style={{ color: 'var(--muted)', fontSize: 24, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
            <HiOutlineMail />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          color: 'var(--muted)', fontSize: 20, opacity: 0.5 }}>
        ↓
      </motion.div>
    </section>
  )
}
