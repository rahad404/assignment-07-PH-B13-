'use client'

import { useState, useEffect } from 'react'
import Banner from '@/components/home/Banner'
import SummaryCards from '@/components/home/SummaryCards'
import FriendCard from '@/components/home/FriendsCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import friendsData from '@/data/friends.json'

export default function HomePage() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="container mx-auto py-8">
      {/* <Banner /> */}
      {/* <SummaryCards friends={friends} /> */}
      
      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
        Your Friends
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  )
}