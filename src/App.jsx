import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import CTA from './components/CTA'
import Scroll3D from './components/Scroll3D'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Scroll3D />
        <Collection />
        <Features />
        <CTA />
        <footer className="py-12 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flamewear. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:underline">Returns</a>
              <a href="#" className="hover:underline">Shipping</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
