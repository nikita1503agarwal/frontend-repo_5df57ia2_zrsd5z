import { motion } from 'framer-motion';

function CTA() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-10">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(800px_400px_at_10%_20%,white,transparent)]" />
          <motion.h3 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-2xl sm:text-3xl font-bold text-white"
          >
            Ready to see qualified meetings on your calendar?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative z-10 mt-2 text-blue-100"
          >
            Share your goals and well send a tailored plan and pricing.
          </motion.p>
          <motion.form 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            onSubmit={(e)=> e.preventDefault()} 
            className="relative z-10 mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="text" 
              placeholder="Your name"
              className="flex-1 rounded-xl px-4 py-3 bg-white/90 text-slate-900 placeholder:text-slate-500 outline-none"
            />
            <input 
              type="email" 
              placeholder="Work email"
              className="flex-1 rounded-xl px-4 py-3 bg-white/90 text-slate-900 placeholder:text-slate-500 outline-none"
            />
            <button 
              className="rounded-xl bg-white text-blue-700 font-semibold px-5 py-3 shadow hover:bg-blue-50 transition"
              type="submit"
            >
              Get proposal
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default CTA;