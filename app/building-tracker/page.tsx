'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Rocket, Plus, Flame, Trophy, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react'

interface DailyUpdate {
  id: string
  date: string
  content: string
  streak: number
  likes: number
  completed: boolean
}

interface Project {
  id: string
  name: string
  status: 'building' | 'shipped' | 'paused'
  daysActive: number
  streak: number
  updates: number
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'AI Email Assistant',
    status: 'building',
    daysActive: 23,
    streak: 12,
    updates: 23,
  },
  {
    id: '2',
    name: 'Revenue Dashboard',
    status: 'shipped',
    daysActive: 45,
    streak: 0,
    updates: 45,
  },
]

const mockUpdates: DailyUpdate[] = [
  {
    id: '1',
    date: 'Today',
    content: 'Fixed the onboarding flow. Reduced steps from 5 to 2. Users are completing it 3x faster now.',
    streak: 12,
    likes: 34,
    completed: true,
  },
  {
    id: '2',
    date: 'Yesterday',
    content: 'Added dark mode. Took longer than expected but users are loving it.',
    streak: 11,
    likes: 28,
    completed: true,
  },
  {
    id: '3',
    date: '2 days ago',
    content: 'Refactored the payment system. Much cleaner code now.',
    streak: 10,
    likes: 19,
    completed: true,
  },
]

export default function BuildingTrackerPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [updates, setUpdates] = useState<DailyUpdate[]>(mockUpdates)
  const [newUpdate, setNewUpdate] = useState('')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const currentStreak = updates[0]?.streak || 0
  const totalDays = projects.reduce((sum, p) => sum + p.daysActive, 0)

  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUpdate.trim()) return

    const update: DailyUpdate = {
      id: Date.now().toString(),
      date: 'Today',
      content: newUpdate,
      streak: currentStreak + 1,
      likes: 0,
      completed: true,
    }

    setUpdates([update, ...updates])
    setNewUpdate('')
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
            <Rocket className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-gradient">Public Building Tracker</h1>
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
              <Flame className="w-6 h-6 text-orange-400" />
              <span className="text-3xl font-bold">{currentStreak}</span>
            </div>
            <p className="text-gray-400">Day Streak</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold">{totalDays}</span>
            </div>
            <p className="text-gray-400">Total Days</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-3xl font-bold">#42</span>
            </div>
            <p className="text-gray-400">Leaderboard</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold">+12%</span>
            </div>
            <p className="text-gray-400">This Week</p>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Projects</h2>
            <button className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Project
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'building' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'shipped' ? 'bg-green-500/20 text-green-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-white">{project.daysActive}</p>
                    <p className="text-xs text-gray-400">Days Active</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">{project.streak}</p>
                    <p className="text-xs text-gray-400">Streak</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-400">{project.updates}</p>
                    <p className="text-xs text-gray-400">Updates</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Daily Update Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Today's Update</h2>
          <p className="text-gray-400 mb-6">
            Share what you built today. Keep the streak alive! 🔥
          </p>
          <form onSubmit={handleSubmitUpdate}>
            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="What did you build today? What did you learn? What's next?"
              className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 mb-4"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Keep your {currentStreak}-day streak going!</span>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Post Update
              </button>
            </div>
          </form>
        </motion.div>

        {/* Recent Updates */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold">@</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">You</p>
                      <p className="text-sm text-gray-400">{update.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-400">{update.streak} day streak</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{update.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <span>👍</span>
                    <span>{update.likes}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

