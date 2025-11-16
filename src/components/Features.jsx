import { Leaf, ShieldCheck, Sparkles, Recycle } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Sustainable Fabrics', desc: 'Premium organic cotton and recycled blends with a soft hand feel.' },
  { icon: ShieldCheck, title: 'Ethically Made', desc: 'Small-batch production with fair wages across our supply chain.' },
  { icon: Sparkles, title: 'Timeless Design', desc: 'Clean silhouettes built to outlast trends and seasons.' },
  { icon: Recycle, title: 'Plastic-Free Packaging', desc: 'Zero plastic mailers using recycled paper and soy inks.' },
]

export default function Features() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-black text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
