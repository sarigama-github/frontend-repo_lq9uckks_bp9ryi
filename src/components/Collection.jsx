const products = [
  { id: 1, name: 'Essential Tee', price: 38, color: 'Carbon', image: 'https://images.unsplash.com/photo-1639667023738-10de4c52d980?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFc3NlbnRpYWwlMjBUZWV8ZW58MHwwfHx8MTc2MzMyNDI4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Boxy Hoodie', price: 78, color: 'Bone', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1470&auto=format&fit=crop' },
  { id: 3, name: 'Relaxed Chinos', price: 68, color: 'Sand', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1470&auto=format&fit=crop' },
  { id: 4, name: 'Overshirt', price: 92, color: 'Olive', image: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1470&auto=format&fit=crop' },
]

export default function Collection() {
  return (
    <section id="shop" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Featured Collection</h2>
            <p className="text-sm text-gray-600">Everyday staples, made better.</p>
          </div>
          <a href="#" className="text-sm font-medium underline underline-offset-4">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <a key={p.id} href="#" className="group rounded-xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-xs text-gray-600">{p.color}</p>
                  </div>
                  <p className="font-semibold">${p.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
