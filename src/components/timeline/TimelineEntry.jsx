import { Phone, MessageCircle, Video, Calendar } from 'lucide-react'

export default function TimelineEntry({ entry }) {
  const getIcon = (type) => {
    switch(type) {
      case 'Call': return <Phone className="h-5 w-5 text-green-600" />
      case 'Text': return <MessageCircle className="h-5 w-5 text-blue-600" />
      case 'Video': return <Video className="h-5 w-5 text-purple-600" />
      default: return <Calendar className="h-5 w-5 text-gray-600" />
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 rounded-full">
          {getIcon(entry.type)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{entry.title}</h3>
          <p className="text-sm text-gray-500">{formatDate(entry.date)}</p>
        </div>
      </div>
    </div>
  )
}