'use client'

import { useContext, useState } from 'react'
import { TimelineContext } from '@/context/TimelineContext'
import TimelineEntry from '@/components/timeline/TimelineEntry'
import TimelineFilter from '@/components/timeline/TimelineFilter'
import { Calendar } from 'lucide-react'

export default function TimelinePage() {
  const { entries } = useContext(TimelineContext)
  const [filter, setFilter] = useState('all')

  const filteredEntries =
    filter === 'all'
      ? entries
      : entries.filter((entry) => entry.type.toLowerCase() === filter.toLowerCase())

  const sortedEntries = [...filteredEntries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar className="h-8 w-8 text-blue-600" />
          Timeline
        </h1>
        <TimelineFilter filter={filter} setFilter={setFilter} />
      </div>

      {sortedEntries.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">No timeline entries yet.</p>
          <p className="text-gray-400">Go to a friend's profile and log a call, text, or video!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedEntries.map((entry, index) => (
            <TimelineEntry key={index} entry={entry} />
          ))}
        </div>
      )}
    </div>
  )
}
