import { useState } from 'react'
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'New Arrivals', href: '#new' },
    { label: 'Men', href: '#men' },
    { label: 'Women', href: '#women' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Stories', href: '#stories' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-bold">F</div>
            <span className="text-lg font-semibold tracking-wide">Flamewear</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-black/5" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/5" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-full hover:bg-black/5" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full px-1.5 py-0.5">2</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md hover:bg-black/5 text-gray-800">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-3">
              <button className="flex-1 px-3 py-2 rounded-md bg-black text-white text-sm">Sign in</button>
              <button className="p-2 rounded-md border border-black/10"><ShoppingBag className="h-5 w-5" /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
