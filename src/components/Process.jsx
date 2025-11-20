import { motion } from 'framer-motion';

const steps = [
  {
    k: '01',
    t: 'Audit & ICP',
    d: 'We analyze your market, wins, and product to define the Ideal Customer Profile.'
  },
  {
    k: '02',
    t: 'List Building',
    d: 'Custom intent data and verified contacts at target accounts.'
  },
  {
    k: '03',
    t: 'Outreach Engine',
    d: 'Personalized multi-channel sequences crafted to spark conversations.'
  },
  {
    k: '04',
    t: 'Booking & Handoff',
    d: 'We book meetings directly on your calendar and track outcomes.'
  }
];

function Process() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-slate-900"
        >
          A simple, proven process
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-3 -left-3 rounded-full bg-blue-600 text-white text-xs px-2 py-1 shadow">{s.k}</div>
              <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;