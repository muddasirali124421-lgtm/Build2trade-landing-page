import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, HardHat, Clock, MessageCircle } from 'lucide-react'

interface StatItemProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  delay: number
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-6 text-center group"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 mb-4 group-hover:from-brand-blue/20 group-hover:to-brand-blue/10 transition-all">
        <Icon className="w-6 h-6 text-brand-blue" />
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-brand-navy mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-brand-gray">{label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const stats = [
    { icon: Users, value: 10000, suffix: '+', label: 'Builders Connected', delay: 0 },
    { icon: HardHat, value: 25000, suffix: '+', label: 'Quality Tradies', delay: 0.1 },
    { icon: Clock, value: 75, suffix: '%', label: 'Faster Matching', delay: 0.2 },
    { icon: MessageCircle, value: 50, suffix: 'K+', label: 'Projects Completed', delay: 0.3 },
  ]

  return (
    <section className="relative py-16 bg-brand-gray-light">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase">
            Trusted By Industry Professionals
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
