'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Lightbulb, Rocket, DollarSign, BookOpen, Sparkles } from 'lucide-react'

const tools = [
  {
    id: 'brutal-feedback',
    name: 'Brutal Feedback Exchange',
    description: 'Get honest, direct feedback from fellow builders. No sugar-coating, just real critiques.',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-pink-500',
    href: '/brutal-feedback',
    color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'ship-or-kill',
    name: 'Ship It or Kill It',
    description: 'Let the community decide if your idea is worth building. Validate before you code.',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
    href: '/ship-or-kill',
    color: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
  },
  {
    id: 'building-tracker',
    name: 'Public Building Tracker',
    description: 'Track your daily progress, build in public, and stay accountable to the community.',
    icon: Rocket,
    gradient: 'from-blue-500 to-cyan-500',
    href: '/building-tracker',
    color: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'revenue-hub',
    name: 'Revenue Transparency Hub',
    description: 'Real revenue numbers from real indie products. Learn from actual data, not vanity metrics.',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
    href: '/revenue-hub',
    color: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'copy-playbook',
    name: 'Copy the Playbook',
    description: 'Reverse-engineer successful indie products. Learn how they were built, step by step.',
    icon: BookOpen,
    gradient: 'from-indigo-500 to-purple-500',
    href: '/copy-playbook',
    color: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold text-gradient">Indie Toolkit</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <a href="#tools" className="text-gray-400 hover:text-white transition-colors">Tools</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </nav>
          </motion.div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="text-gradient">Build Better.</span>
              <br />
              <span className="text-white">Ship Faster.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
              Five powerful tools designed for indie hackers who want real feedback, real data, and real results.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#tools"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary-500/50"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="container mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-gradient">Pick Your Weapon</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={tool.href}>
                    <div className={`${tool.color} glass rounded-2xl p-8 h-full card-hover cursor-pointer group`}>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{tool.name}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{tool.description}</p>
                      <div className="flex items-center text-primary-400 font-semibold group-hover:gap-2 transition-all">
                        Open Tool
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center text-gray-500">
          <p>Built for the indie hacker community • Open source • Always free</p>
        </footer>
      </div>
    </div>
  )
}

