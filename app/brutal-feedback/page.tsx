'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageSquare, Send, ThumbsUp, ThumbsDown, Star, TrendingUp, Users } from 'lucide-react'

interface Feedback {
  id: string
  from: string
  content: string
  rating: number
  helpful: number
  timestamp: string
  type: 'brutal' | 'constructive' | 'praise'
}

const mockFeedbacks: Feedback[] = [
  {
    id: '1',
    from: '@indiehacker',
    content: 'Your landing page is cluttered. Cut 50% of the text. Users don\'t read, they scan. Make it scannable.',
    rating: 5,
    helpful: 23,
    timestamp: '2h ago',
    type: 'brutal',
  },
  {
    id: '2',
    from: '@builder',
    content: 'The onboarding flow has 5 steps. That\'s 4 too many. Users drop off at step 2. Simplify or die.',
    rating: 5,
    helpful: 18,
    timestamp: '5h ago',
    type: 'brutal',
  },
  {
    id: '3',
    from: '@founder',
    content: 'Good concept, but your pricing is confusing. $9/mo or $99/year? Pick one and make it obvious.',
    rating: 4,
    helpful: 15,
    timestamp: '1d ago',
    type: 'constructive',
  },
]

export default function BrutalFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(mockFeedbacks)
  const [requestText, setRequestText] = useState('')
  const [activeTab, setActiveTab] = useState<'request' | 'receive' | 'give'>('receive')

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!requestText.trim()) return
    // In real app, this would submit to backend
    alert('Feedback request submitted! You\'ll be matched with a reviewer soon.')
    setRequestText('')
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
            <MessageSquare className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-gradient">Brutal Feedback Exchange</h1>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-3xl font-bold">1,247</span>
            </div>
            <p className="text-gray-400">Active Reviewers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-6 h-6 text-pink-400" />
              <span className="text-3xl font-bold">3,891</span>
            </div>
            <p className="text-gray-400">Feedback Given</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-gray-400">Avg Rating</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {(['request', 'receive', 'give'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Request Tab */}
        {activeTab === 'request' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Request Brutal Feedback</h2>
            <p className="text-gray-400 mb-6">
              Share your project, landing page, or idea. Get matched with experienced builders who will give you honest, direct feedback.
            </p>
            <form onSubmit={handleSubmitRequest}>
              <textarea
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder="Describe what you want feedback on... Be specific. What are you struggling with? What do you want to improve?"
                className="w-full h-40 bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 mb-4"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Request
              </button>
            </form>
          </motion.div>
        )}

        {/* Receive Tab */}
        {activeTab === 'receive' && (
          <div className="space-y-6">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-white">{feedback.from}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        feedback.type === 'brutal' ? 'bg-red-500/20 text-red-400' :
                        feedback.type === 'constructive' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {feedback.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{feedback.timestamp}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white mb-4 leading-relaxed">{feedback.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{feedback.helpful}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Give Tab */}
        {activeTab === 'give' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Pending Reviews</h2>
            <p className="text-gray-400 mb-6">
              Help fellow builders by giving them honest, direct feedback. Be brutal but constructive.
            </p>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white mb-1">Landing Page Review Request</h3>
                    <p className="text-sm text-gray-400">@newfounder • 3h ago</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                    Review
                  </button>
                </div>
                <p className="text-gray-300 text-sm">
                  "Just launched my SaaS landing page. Looking for feedback on clarity, value prop, and CTA placement."
                </p>
              </div>
              <div className="bg-black/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white mb-1">Product Idea Validation</h3>
                    <p className="text-sm text-gray-400">@builder • 5h ago</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                    Review
                  </button>
                </div>
                <p className="text-gray-300 text-sm">
                  "Thinking of building a tool for X. Want to know if the problem is real or if I'm solving for myself."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}


