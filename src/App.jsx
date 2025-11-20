import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">LG</div>
            <span className="font-semibold">LeadGen Studio</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <button className="rounded-xl bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700">Get pricing</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="process"><Process /></div>
        <div id="contact"><CTA /></div>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-500 text-center">
        © {new Date().getFullYear()} LeadGen Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;