import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mick Thompson',
    role: 'Builder',
    location: 'Melbourne, VIC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'This app has streamlined how we run projects. Posting jobs and managing quotes is simple, and the reporting gives us real clarity.',
    rating: 5,
    type: 'Builder',
  },
  {
    id: 2,
    name: 'Dave Collins',
    role: 'Electrician',
    location: 'Newcastle, NSW',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content: 'The leads I get are relevant to my trade and location. I am not wasting time on jobs that do not suit me.',
    rating: 5,
    type: 'Tradie',
  },
  {
    id: 3,
    name: 'Brett Wilson',
    role: 'Builder',
    location: 'Sydney, NSW',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    content: 'Finding reliable tradies used to take time. Now everything is in one place, and the verification badges give confidence.',
    rating: 5,
    type: 'Builder',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-brand-gray-light">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]" />
      
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-sm font-semibold tracking-wider uppercase"
          >
            Testimonials
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-4 mb-6 text-brand-navy"
          >
            What Our Members{' '}
            <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/10 group-hover:text-brand-gold/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              <p className="text-brand-gray-dark leading-relaxed mb-8 flex-grow relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-brand-blue/10">
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-blue/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-brand-gold rounded-full p-1 border-2 border-white">
                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-brand-gray truncate max-w-[150px]">
                    {testimonial.role}
                  </p>
                  <p className="text-[10px] text-brand-blue font-medium mt-0.5">
                    {testimonial.location} • {testimonial.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
