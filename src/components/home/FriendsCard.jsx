'use client'

import Link from 'next/link'

export default function FriendCard({ friend }) {
  // Mapping status to the specific orange color in the image
  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'almost due':
        return 'bg-[#F2B04D] text-white' // Matches the orange in the image
      case 'overdue':
        return 'bg-error text-error-content'
      case 'on-track':
        return 'bg-success text-success-content'
      default:
        return 'bg-base-300'
    }
  }

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="card bg-base-100 shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center transition-all hover:shadow-2xl w-full max-w-sm">
        {/* Circular Avatar */}
        <div className="avatar mb-6">
          <div className="w-32 rounded-full overflow-hidden">
            <img
              src={friend.picture}
              alt={friend.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x200?text=User'
              }}
            />
          </div>
        </div>

        {/* Name and Relative Time */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#2D3748] mb-1">
            {friend.name}
          </h2>
          <p className="text-[#718096] text-lg font-medium">
            {friend.days_since_contact}d ago
          </p>
        </div>

        {/* Tags and Status Badges */}
        <div className="flex flex-col items-center gap-3">
          {friend.tags?.[0] && (
            <div className="badge badge-lg py-1 px-4 bg-[#D1FAE5] text-[#065F46] border-none rounded-2xl font-semibold uppercase tracking-wide">
              {friend.tags[0]}
            </div>
          )}

          <div className={`badge badge-lg py-1 px-4 border-none rounded-2xl font-medium text-lg rounded-3xl ${getStatusClasses(friend.status)}`}>
            {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
          </div>
        </div>
      </div>
    </Link>
  )
}