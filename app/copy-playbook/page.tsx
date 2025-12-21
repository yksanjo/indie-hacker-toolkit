'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Play, CheckCircle2, Code, DollarSign, Users, Clock, ArrowRight } from 'lucide-react'

interface Playbook {
  id: string
  product: string
  revenue: string
  steps: Step[]
  techStack: string[]
  timeline: string
  founder: string
}

interface Step {
  id: string
  title: string
  description: string
  order: number
  completed: boolean
}

const mockPlaybooks: Playbook[] = [
  {
    id: '1',
    product: 'Nomad List',
    revenue: '$45k MRR',
    timeline: '9 years',
    founder: '@levelsio',
    techStack: ['PHP', 'MySQL', 'jQuery'],
    steps: [
      {
        id: '1',
        title: 'Validate the Problem',
        description: 'Started with a simple Google Spreadsheet shared on Hacker News. Got 100 signups in first week.',
        order: 1,
        completed: true,
      },
      {
        id: '2',
        title: 'Build MVP in 1 Week',
        description: 'Simple PHP script that scraped cost of living data. No fancy UI, just functional.',
        order: 2,
        completed: true,
      },
      {
        id: '3',
        title: 'Launch on Product Hunt',
        description: 'Got #1 product of the day. 5,000 signups in 24 hours. Server crashed twice.',
        order: 3,
        completed: true,
      },
      {
        id: '4',
        title: 'Add Premium Features',
        description: 'Added filters, saved lists, and premium data. $9/month. First paying customer in week 2.',
        order: 4,
        completed: true,
      },
      {
        id: '5',
        title: 'Build Community',
        description: 'Added forums, meetups, and user-generated content. Community became the moat.',
        order: 5,
        completed: true,
      },
    ],
  },
  {
    id: '2',
    product: 'Remote OK',
    revenue: '$32k MRR',
    timeline: '8 years',
    founder: '@levelsio',
    techStack: ['PHP', 'PostgreSQL', 'Cron Jobs'],
    steps: [
      {
        id: '1',
        title: 'Identify the Gap',
        description: 'Saw that existing job boards were cluttered. Built a simple, clean interface.',
        order: 1,
        completed: true,
      },
      {
        id: '2',
        title: 'Automate Job Scraping',
        description: 'Built cron jobs to scrape remote jobs from various sources. Updated every hour.',
        order: 2,
        completed: true,
      },
      {
        id: '3',
        title: 'Charge Employers',
        description: '$299 to post a job. No free posts. Quality over quantity.',
        order: 3,
        completed: true,
      },
      {
        id: '4',
        title: 'Build Email List',
        description: 'Weekly newsletter with best remote jobs. 50k subscribers. High open rates.',
        order: 4,
        completed: true,
      },
    ],
  },
]

export default function CopyPlaybookPage() {
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(mockPlaybooks[0])
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
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
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <h1 className="text-3xl font-bold text-gradient">Copy the Playbook</h1>
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
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <span className="text-3xl font-bold">{mockPlaybooks.length}</span>
            </div>
            <p className="text-gray-400">Playbooks</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold">$77k</span>
            </div>
            <p className="text-gray-400">Total MRR</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold">2.4k</span>
            </div>
            <p className="text-gray-400">Learners</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-3xl font-bold">17</span>
            </div>
            <p className="text-gray-400">Avg Steps</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Playbooks List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Available Playbooks</h2>
            <div className="space-y-4">
              {mockPlaybooks.map((playbook, index) => (
                <motion.div
                  key={playbook.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPlaybook(playbook)}
                  className={`glass rounded-2xl p-6 cursor-pointer transition-all ${
                    selectedPlaybook?.id === playbook.id
                      ? 'ring-2 ring-indigo-500 bg-indigo-500/10'
                      : 'hover:scale-105'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{playbook.product}</h3>
                    {selectedPlaybook?.id === playbook.id && (
                      <Play className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <span>{playbook.revenue}</span>
                    <span>•</span>
                    <span>{playbook.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {playbook.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Playbook Details */}
          <div className="lg:col-span-2">
            {selectedPlaybook && (
              <motion.div
                key={selectedPlaybook.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-8"
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedPlaybook.product}</h2>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span>{selectedPlaybook.founder}</span>
                        <span>•</span>
                        <span>{selectedPlaybook.revenue}</span>
                        <span>•</span>
                        <span>{selectedPlaybook.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedPlaybook.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-6">Step-by-Step Playbook</h3>
                  {selectedPlaybook.steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-2 border-indigo-500/50 pl-6 pb-6 relative"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          Step {step.order}: {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      {expandedSteps.has(step.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 p-4 bg-black/50 rounded-lg"
                        >
                          <div className="space-y-2 text-sm text-gray-400">
                            <p><strong className="text-white">Tools used:</strong> Basic PHP, MySQL, simple HTML</p>
                            <p><strong className="text-white">Time taken:</strong> 1 week</p>
                            <p><strong className="text-white">Key insight:</strong> Start simple, iterate based on feedback</p>
                          </div>
                        </motion.div>
                      )}
                      <button
                        onClick={() => toggleStep(step.id)}
                        className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                      >
                        {expandedSteps.has(step.id) ? 'Show less' : 'Show details'}
                        <ArrowRight className={`w-3 h-3 transition-transform ${expandedSteps.has(step.id) ? 'rotate-90' : ''}`} />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <Code className="w-5 h-5" />
                    Start Building This
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

