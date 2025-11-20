import { motion } from 'framer-motion';
import { CheckCircle, Target, Rocket, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'We identify high-intent accounts using firmographics, tech stack, and buying signals.'
  },
  {
    icon: Rocket,
    title: 'Multi-channel Outreach',
    desc: 'Sequenced email, LinkedIn, and phone touchpoints that respect your brand.'
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards with pipeline value and conversion rates.'
  },
  {
    icon: CheckCircle,
    title: 'Pay-for-Performance',
    desc: 'Aligned incentives so you only pay for booked meetings.'
  }
];

function Features() {
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-0 -top-10 mx-auto h-40 max-w-5xl rounded-full bg-blue-50 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Built to generate meetings, not noise
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <f.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;