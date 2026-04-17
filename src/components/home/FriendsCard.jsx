'use client'

import Link from 'next/link'

export default function FriendCard({ friend }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'overdue': return 'bg-red-100 text-red-700 border-red-200'
      case 'almost due': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'on-track': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="card overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200?text=No+Image'
          }}
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{friend.name}</h3>
          <p className="text-sm text-gray-500 mb-2">
             {friend.days_since_contact} days since contact
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {friend.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(friend.status)}`}>
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  )
}