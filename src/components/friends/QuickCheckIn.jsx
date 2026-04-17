import { useContext } from 'react'
import { Phone, MessageCircle, Video } from 'lucide-react'
import toast from 'react-hot-toast'
import { TimelineContext } from '@/context/TimelineContext'

export default function QuickCheckIn({ friend }) {
  const { addEntry } = useContext(TimelineContext)

  const handleInteraction = (type) => {
    const entry = {
      date: new Date().toISOString(),
      type: type,
      title: `${type} with ${friend.name}`,
      friendId: friend.id,
      friendName: friend.name
    }
    addEntry(entry)
    toast.success(`${type} logged successfully! ✅`)
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-3">
        <button 
          onClick={() => handleInteraction('Call')}
          className="flex flex-col items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
        >
          <Phone className="h-6 w-6 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Call</span>
        </button>
        
        <button 
          onClick={() => handleInteraction('Text')}
          className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          <MessageCircle className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Text</span>
        </button>
        
        <button 
          onClick={() => handleInteraction('Video')}
          className="flex flex-col items-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <Video className="h-6 w-6 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Video</span>
        </button>
      </div>
    </div>
  )
}