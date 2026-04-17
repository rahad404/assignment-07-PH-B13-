import { Calendar, Target, Clock } from 'lucide-react'

export default function StatsCards({ friend }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card p-4 text-center">
        <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">Days Since Contact</p>
        <p className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</p>
      </div>
      
      <div className="card p-4 text-center">
        <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">Goal (days)</p>
        <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
      </div>
      
      <div className="card p-4 text-center">
        <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">Next Due Date</p>
        <p className="text-sm font-semibold text-gray-800">{formatDate(friend.next_due_date)}</p>
      </div>
    </div>
  )
}