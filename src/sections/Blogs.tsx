import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Find Good Tradies Near You',
    excerpt: 'Finding the right tradie can be hard. Here are simple tips to help you find skilled workers you can trust.',
    date: 'January 10, 2026',
    readTime: '5 min read',
    image: '/blog-1.jpg'
  },
  {
    id: 2,
    title: '5 Ways to Grow Your Building Business',
    excerpt: 'Want more jobs? Learn five easy ways to get more work and make your business bigger.',
    date: 'January 5, 2026',
    readTime: '7 min read',
    image: '/blog-2.jpg'
  },
  {
    id: 3,
    title: 'Safety Tips for Building Sites',
    excerpt: 'Stay safe at work. Read these important safety rules every builder and tradie should know.',
    date: 'December 28, 2025',
    readTime: '4 min read',
    image: '/blog-3.jpg'
  },
  {
    id: 4,
    title: 'How to Write a Good Quote',
    excerpt: 'Learn how to make clear quotes that help you win more jobs and keep customers happy.',
    date: 'December 20, 2025',
    readTime: '6 min read',
    image: '/blog-4.jpg'
  },
  {
    id: 5,
    title: 'New Builder? Start Here',
    excerpt: 'Just starting out? This guide helps new builders find their first jobs and build a good name.',
    date: 'December 15, 2025',
    readTime: '8 min read',
    image: '/blog-5.jpg'
  },
  {
    id: 6,
    title: 'Why Reviews Matter for Tradies',
    excerpt: 'Good reviews help you get more work. Learn how to ask for reviews and use them well.',
    date: 'December 10, 2025',
    readTime: '5 min read',
    image: '/blog-6.jpg'
  }
]

const Blogs = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Build2Trade Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and stories to help builders and tradies succeed
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg mb-12"
        >
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-dark p-8 lg:p-12 flex items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-dark text-xs font-bold mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Getting Started with Build2Trade
                </h2>
                <p className="text-gray-300 mb-6">
                  New to our app? This guide shows you everything you need to know. 
                  Learn how to make a profile, find jobs, and connect with other builders.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    January 15, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    10 min read
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 min-h-[300px] flex items-center justify-center">
              <p className="text-gray-400">Featured Image</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Blog Image</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-dark transition-colors group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blogs
