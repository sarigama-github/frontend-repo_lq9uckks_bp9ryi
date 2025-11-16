import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06)_0,rgba(0,0,0,0)_40%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.06)_0,rgba(0,0,0,0)_40%)]"/>
      <div className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-600">
              <span className="h-1 w-1 rounded-full bg-black"/> New Season Drop
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
              Wear Your Story.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">Make a Statement.</span>
            </h1>
            <p className="mt-5 text-gray-600 max-w-prose">
              Elevated essentials and bold pieces crafted for everyday expression. Sustainably made. Designed to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md bg-black text-white font-medium">Shop Collection</a>
              <a href="#lookbook" className="px-5 py-3 rounded-md border border-black/10 text-gray-900 hover:bg-black/5 font-medium">View Lookbook</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://images.unsplash.com/photo-155${80+i}4363-5b2b9d52b02a?auto=format&fit=crop&w=80&q=60`} alt="reviewer" />
                ))}
              </div>
              <p>Trusted by 5k+ customers</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1632&auto=format&fit=crop"
                alt="Model wearing Flamewear"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border border-black/10 rounded-xl p-4 shadow-lg">
              <p className="text-sm font-medium">Organic cotton. Ethically made.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
