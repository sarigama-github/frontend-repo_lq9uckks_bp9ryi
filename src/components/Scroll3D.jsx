import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Scroll3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const rotateY = useTransform(scrollYProgress, [0, 1], [-25, 25])
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, -8])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05])
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8])

  return (
    <section ref={ref} className="relative h-[220vh] bg-white">
      {/* background flair */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/20 to-indigo-500/10 blur-3xl" />
      </div>

      {/* sticky content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.h2
              style={{ opacity }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Move through the drop in 3D
            </motion.h2>
            <motion.p
              style={{ opacity }}
              className="mt-4 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              Scroll to rotate and explore the hero piece from every angle. Built with smooth, hardware-accelerated transforms for a premium feel.
            </motion.p>
            <motion.div style={{ opacity }} className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white">Interactive demo</span>
              <span className="text-sm text-gray-500">Scroll down ↕</span>
            </motion.div>
          </div>

          <div className="relative hidden w-full max-w-lg flex-1 items-center justify-center md:flex">
            <motion.div
              style={{ rotateY, rotateX, scale, y }}
              className="relative aspect-[3/4] w-full rounded-3xl border border-black/10 bg-white/80 shadow-2xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-sm [transform-style:preserve-3d]"
            >
              {/* front panel */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop"
                  alt="Flamewear premium hoodie in charcoal"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
              </div>

              {/* floating tag */}
              <motion.div
                style={{ rotateY, rotateX }}
                className="absolute -left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-md ring-1 ring-black/5 md:-left-8"
              >
                FW-24 • Drop I
              </motion.div>

              {/* side reflection */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scroll3D
