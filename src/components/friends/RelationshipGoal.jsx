import { Edit2 } from 'lucide-react'

export default function RelationshipGoal({ friend }) {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Relationship Goal</h3>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
          <Edit2 className="h-4 w-4" />
          Edit
        </button>
      </div>
      <p className="text-gray-600">
        Contact {friend.name} every <span className="font-bold text-blue-600">{friend.goal} days</span> to maintain a strong friendship.
      </p>
      <div className="mt-4 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${Math.min(100, (friend.days_since_contact / friend.goal) * 100)}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {friend.days_since_contact} of {friend.goal} days
      </p>
    </div>
  )
}