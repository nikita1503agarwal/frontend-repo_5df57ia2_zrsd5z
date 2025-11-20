import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0"> 
        <Spline 
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>

      {/* Soft gradient overlays for brand tint - don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-3 py-1 text-sm text-blue-700 mb-6"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
            Conversion-first B2B lead generation
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
          >
            Fill your pipeline with qualified meetings
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-lg sm:text-xl text-slate-600 max-w-xl"
          >
            We combine data-driven targeting with multi-channel outreach to book ready-to-buy prospects for your sales team.
          </motion.p>

          {/* Lead capture form */}
          <motion.form 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()} 
            className="mt-8 flex w-full max-w-xl rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-2 shadow-sm"
          >
            <input 
              type="email" 
              required 
              placeholder="Work email"
              className="flex-1 rounded-xl px-4 py-3 outline-none text-slate-800 placeholder:text-slate-400 bg-transparent"
            />
            <button 
              type="submit" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get pricing
            </button>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="mt-5 text-sm text-slate-500"
          >
            No spam—just a quick reply from our team.
          </motion.div>
        </div>

        {/* Right-side KPI card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.25, duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="ml-auto w-full max-w-md rounded-3xl border border-blue-200/60 bg-white/80 backdrop-blur shadow-xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-slate-900">+312%</div>
                <div className="mt-1 text-sm text-slate-500">Avg. pipeline growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">41 days</div>
                <div className="mt-1 text-sm text-slate-500">To first ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">72%</div>
                <div className="mt-1 text-sm text-slate-500">Meeting acceptance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">9.4/10</div>
                <div className="mt-1 text-sm text-slate-500">Client satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;