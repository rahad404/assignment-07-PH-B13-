import { Mail, Tag, FileText, Clock, Archive, Trash2 } from 'lucide-react'

export default function FriendInfo({ friend }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'overdue': return 'bg-red-100 text-red-700'
      case 'almost due': return 'bg-yellow-100 text-yellow-700'
      case 'on-track': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="card p-6 sticky top-20">
      <div className="text-center mb-6">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/128x128?text=No+Image'
          }}
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{friend.name}</h2>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(friend.status)}`}>
          {friend.status}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Tag className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-700">Tags</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {friend.tags.map((tag, index) => (
                <span key={index} className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-700">Bio</p>
            <p className="text-gray-600">{friend.bio}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-600">{friend.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <button className="w-full btn-secondary flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          Snooze 2 Weeks
        </button>
        <button className="w-full btn-secondary flex items-center justify-center gap-2">
          <Archive className="h-4 w-4" />
          Archive
        </button>
        <button className="w-full bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  )
}