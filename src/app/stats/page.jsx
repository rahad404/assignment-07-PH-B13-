'use client'

import { useContext } from 'react'
import { TimelineContext } from '@/context/TimelineContext'
import InteractionPieChart from '@/components/stats/PieChart'
import { BarChart3 } from 'lucide-react'

export default function StatsPage() {
  const { entries } = useContext(TimelineContext)

  const callCount = entries.filter((e) => e.type === 'Call').length
  const textCount = entries.filter((e) => e.type === 'Text').length
  const videoCount = entries.filter((e) => e.type === 'Video').length

  const total = callCount + textCount + videoCount

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-8">
        <BarChart3 className="h-8 w-8 text-blue-600" />
        Friendship Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Interaction Distribution</h2>
          <InteractionPieChart call={callCount} text={textCount} video={videoCount} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <span className="font-semibold">Total Interactions:</span>
              <span className="text-2xl font-bold text-blue-600">{total}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-semibold">📞 Calls:</span>
              <span className="text-xl font-bold text-green-600">{callCount}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <span className="font-semibold">💬 Texts:</span>
              <span className="text-xl font-bold text-purple-600">{textCount}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <span className="font-semibold">🎥 Videos:</span>
              <span className="text-xl font-bold text-orange-600">{videoCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
