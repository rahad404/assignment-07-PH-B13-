'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import friendsData from '@/data/friends.json'
import FriendInfo from '@/components/friends/FriendInfo'
import StatsCards from '@/components/friends/StatsCard'
import RelationshipGoal from '@/components/friends/RelationshipGoal'
import QuickCheckIn from '@/components/friends/QuickCheckIn'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import NotFound from '@/app/not-found'

export default function FriendDetailPage() {
  const { id } = useParams()
  const [friend, setFriend] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const found = friendsData.find(f => f.id === parseInt(id))
      setFriend(found)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) return <LoadingSpinner />
  if (!friend) return <NotFound />

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <FriendInfo friend={friend} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <StatsCards friend={friend} />
          <RelationshipGoal friend={friend} />
          <QuickCheckIn friend={friend} />
        </div>
      </div>
    </div>
  )
}