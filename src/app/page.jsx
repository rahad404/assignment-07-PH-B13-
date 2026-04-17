'use client'

import { useState, useEffect } from 'react'
import Banner from '@/components/home/Banner'
import SummaryCards from '@/components/home/SummaryCards'
import FriendCard from '@/components/home/FriendsCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import friendsData from '@/data/friends.json'

export default function HomePage() {


  return (
    <div className="container mx-auto py-8">

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
        Your Friends
      </h2>      
    </div>
  )
}