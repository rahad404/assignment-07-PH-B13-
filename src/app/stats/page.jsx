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
    <div className="container max-w-8/12 mx-auto py-8">
      <h1 className="text-3xl text-center font-bold text-gray-800 flex items-center gap-2 mb-8">
        <BarChart3 className="h-8 w-8 text-[#244D3F]" />
        Friendship Analytics
      </h1>

      <div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">By Interaction Type</h2>
          <InteractionPieChart call={callCount} text={textCount} video={videoCount} />
        </div>
      </div>
    </div>
  )
}
