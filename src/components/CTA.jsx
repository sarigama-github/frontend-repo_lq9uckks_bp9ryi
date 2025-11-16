export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_120%,rgba(0,0,0,0.06)_0,rgba(0,0,0,0)_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-black text-white p-10 sm:p-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Drop 02: City Layers</h3>
            <p className="mt-3 text-white/80">A modular system for unpredictable days. Water-resistant outerwear, insulated vests, and textured knits.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md bg-white text-black font-medium">Shop the Drop</a>
              <a href="#lookbook" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 font-medium">See the Lookbook</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop" alt="City Layers" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
