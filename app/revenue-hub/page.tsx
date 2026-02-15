'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, DollarSign, TrendingUp, Eye, Filter, Plus, BarChart3, Calendar } from 'lucide-react'

interface RevenueEntry {
  id: string
  product: string
  monthlyRevenue: number
  mrr: number
  growth: number
  category: string
  techStack: string[]
  age: string
  founder: string
  verified: boolean
}

const mockEntries: RevenueEntry[] = [
  {
    id: '1',
    product: 'Nomad List',
    monthlyRevenue: 45000,
    mrr: 45000,
    growth: 12,
    category: 'Community',
    techStack: ['PHP', 'MySQL'],
    age: '9 years',
    founder: '@levelsio',
    verified: true,
  },
  {
    id: '2',
    product: 'Remote OK',
    monthlyRevenue: 32000,
    mrr: 32000,
    growth: 8,
    category: 'Job Board',
    techStack: ['PHP', 'PostgreSQL'],
    age: '8 years',
    founder: '@levelsio',
    verified: true,
  },
  {
    id: '3',
    product: 'AI Writing Tool',
    monthlyRevenue: 12500,
    mrr: 12500,
    growth: 45,
    category: 'SaaS',
    techStack: ['Next.js', 'OpenAI'],
    age: '6 months',
    founder: '@builder',
    verified: false,
  },
  {
    id: '4',
    product: 'Design Tool',
    monthlyRevenue: 8900,
    mrr: 8900,
    growth: -5,
    category: 'Design',
    techStack: ['React', 'Node.js'],
    age: '2 years',
    founder: '@designer',
    verified: false,
  },
]

export default function RevenueHubPage() {
  const [entries, setEntries] = useState<RevenueEntry[]>(mockEntries)
  const [filter, setFilter] = useState<'all' | 'verified' | 'trending'>('all')
  const [sortBy, setSortBy] = useState<'revenue' | 'growth' | 'age'>('revenue')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortBy === 'revenue') return b.monthlyRevenue - a.monthlyRevenue
    if (sortBy === 'growth') return b.growth - a.growth
    return 0
  })

  const filteredEntries = sortedEntries.filter(entry => {
    if (filter === 'verified') return entry.verified
    if (filter === 'trending') return entry.growth > 20
    return true
  })

  const totalMRR = entries.reduce((sum, e) => sum + e.mrr, 0)
  const avgGrowth = entries.reduce((sum, e) => sum + e.growth, 0) / entries.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-gradient">Revenue Transparency Hub</h1>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold">{formatCurrency(totalMRR)}</span>
            </div>
            <p className="text-gray-400">Total MRR Tracked</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold">+{avgGrowth.toFixed(1)}%</span>
            </div>
            <p className="text-gray-400">Avg Growth</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              <span className="text-3xl font-bold">{entries.length}</span>
            </div>
            <p className="text-gray-400">Products</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-yellow-400" />
              <span className="text-3xl font-bold">12.4k</span>
            </div>
            <p className="text-gray-400">Monthly Views</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex gap-2">
            {(['all', 'verified', 'trending'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === f
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500/50"
            >
              <option value="revenue">Sort by Revenue</option>
              <option value="growth">Sort by Growth</option>
              <option value="age">Sort by Age</option>
            </select>
          </div>
        </div>

        {/* Revenue Entries */}
        <div className="space-y-6 mb-12">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{entry.product}</h2>
                    {entry.verified && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{entry.founder}</span>
                    <span>•</span>
                    <span>{entry.category}</span>
                    <span>•</span>
                    <span>{entry.age}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {entry.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {formatCurrency(entry.monthlyRevenue)}
                  </div>
                  <div className="text-sm text-gray-400">MRR</div>
                  <div className={`flex items-center gap-1 mt-2 ${
                    entry.growth > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${entry.growth < 0 ? 'rotate-180' : ''}`} />
                    <span className="text-sm font-semibold">{entry.growth > 0 ? '+' : ''}{entry.growth}%</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last updated: 2 days ago</span>
                  <button className="text-green-400 hover:text-green-300 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Share Your Revenue</h2>
              <p className="text-gray-400">
                Help the community learn from real numbers. Transparency builds trust.
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Entry
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


