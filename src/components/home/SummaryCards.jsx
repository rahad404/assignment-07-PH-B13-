import { Users, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function SummaryCards({ friends }) {
  const totalFriends = friends.length
  const overdue = friends.filter(f => f.status === 'overdue').length
  const almostDue = friends.filter(f => f.status === 'almost due').length
  const onTrack = friends.filter(f => f.status === 'on-track').length

  const cards = [
    { title: 'Total Friends', value: totalFriends, icon: Users, color: 'blue' },
    { title: 'Overdue', value: overdue, icon: AlertCircle, color: 'red' },
    { title: 'Almost Due', value: almostDue, icon: Clock, color: 'yellow' },
    { title: 'On Track', value: onTrack, icon: CheckCircle, color: 'green' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon
        const colorClasses = {
          blue: 'bg-blue-100 text-blue-600',
          red: 'bg-red-100 text-red-600',
          yellow: 'bg-yellow-100 text-yellow-600',
          green: 'bg-green-100 text-green-600',
        }
        return (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{card.value}</p>
              </div>
              <div className={`p-3 rounded-full ${colorClasses[card.color]}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}