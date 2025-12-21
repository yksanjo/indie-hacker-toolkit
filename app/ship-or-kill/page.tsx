'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Lightbulb, ThumbsUp, ThumbsDown, TrendingUp, Clock, Users, Zap } from 'lucide-react'

interface Idea {
  id: string
  title: string
  description: string
  author: string
  shipVotes: number
  killVotes: number
  timeLeft: string
  status: 'active' | 'shipped' | 'killed'
  category: string
}

const mockIdeas: Idea[] = [
  {
    id: '1',
    title: 'AI-powered email summarizer for busy founders',
    description: 'Automatically summarizes long email threads so you can catch up in seconds instead of minutes.',
    author: '@founder',
    shipVotes: 234,
    killVotes: 45,
    timeLeft: '2d left',
    status: 'active',
    category: 'Productivity',
  },
  {
    id: '2',
    title: 'Another todo app with AI',
    description: 'Todo app but with AI that helps you prioritize tasks based on your calendar and goals.',
    author: '@builder',
    shipVotes: 12,
    killVotes: 189,
    timeLeft: '1d left',
    status: 'active',
    category: 'Productivity',
  },
  {
    id: '3',
    title: 'Revenue dashboard for indie hackers',
    description: 'Simple dashboard to track revenue across multiple products. No fluff, just numbers.',
    author: '@hacker',
    shipVotes: 456,
    killVotes: 23,
    timeLeft: '3d left',
    status: 'active',
    category: 'Analytics',
  },
]

export default function ShipOrKillPage() {
  const [ideas, setIdeas] = useState<Idea[]>(mockIdeas)
  const [filter, setFilter] = useState<'all' | 'trending' | 'new'>('trending')
  const [newIdea, setNewIdea] = useState({ title: '', description: '', category: '' })

  const handleVote = (id: string, vote: 'ship' | 'kill') => {
    setIdeas(ideas.map(idea => {
      if (idea.id === id) {
        if (vote === 'ship') {
          return { ...idea, shipVotes: idea.shipVotes + 1 }
        } else {
          return { ...idea, killVotes: idea.killVotes + 1 }
        }
      }
      return idea
    }))
  }

  const getVotePercentage = (idea: Idea) => {
    const total = idea.shipVotes + idea.killVotes
    if (total === 0) return 50
    return Math.round((idea.shipVotes / total) * 100)
  }

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
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-gradient">Ship It or Kill It</h1>
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
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-3xl font-bold">892</span>
            </div>
            <p className="text-gray-400">Ideas Validated</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold">67%</span>
            </div>
            <p className="text-gray-400">Shipped Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold">2.1k</span>
            </div>
            <p className="text-gray-400">Voters</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-orange-400" />
              <span className="text-3xl font-bold">24h</span>
            </div>
            <p className="text-gray-400">Avg Decision</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          {(['all', 'trending', 'new'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Ideas List */}
        <div className="space-y-6 mb-12">
          {ideas.map((idea, index) => {
            const shipPercent = getVotePercentage(idea)
            const shouldShip = shipPercent >= 70

            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                        {idea.category}
                      </span>
                      <span className="text-gray-400 text-sm">by {idea.author}</span>
                      <span className="text-gray-500 text-sm">• {idea.timeLeft}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{idea.title}</h2>
                    <p className="text-gray-300 mb-4">{idea.description}</p>
                  </div>
                </div>

                {/* Vote Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleVote(idea.id, 'ship')}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-semibold">{idea.shipVotes}</span>
                      </button>
                      <button
                        onClick={() => handleVote(idea.id, 'kill')}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                      >
                        <ThumbsDown className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 font-semibold">{idea.killVotes}</span>
                      </button>
                    </div>
                    <div className={`text-lg font-bold ${shouldShip ? 'text-green-400' : 'text-red-400'}`}>
                      {shipPercent}% {shouldShip ? 'SHIP' : 'KILL'}
                    </div>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        shouldShip ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-orange-500'
                      }`}
                      style={{ width: `${shipPercent}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Submit New Idea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Submit Your Idea</h2>
          <p className="text-gray-400 mb-6">
            Got an idea? Let the community decide if it's worth building. Be specific about the problem you're solving.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Idea title..."
              value={newIdea.title}
              onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
            />
            <textarea
              placeholder="Describe your idea and the problem it solves..."
              value={newIdea.description}
              onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
              className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
            />
            <button
              onClick={() => {
                alert('Idea submitted! It will appear in the feed shortly.')
                setNewIdea({ title: '', description: '', category: '' })
              }}
              className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Submit for Validation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

