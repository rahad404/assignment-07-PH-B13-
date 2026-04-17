import { Bell, Archive, Trash2 } from 'lucide-react'

export default function FriendInfo({ friend }) {
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'overdue': return 'bg-[#FF4D4D] text-white'
      case 'almost due': return 'bg-[#F2B04D] text-white'
      default: return 'bg-success text-white'
    }
  }

  return (
    <div className="card bg-white shadow-sm border border-slate-100 p-8 text-center flex flex-col items-center">
      {/* Avatar */}
      <div className="avatar mb-4">
        <div className="w-24 rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
          <img src={friend.picture} alt={friend.name} />
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#1E293B] mb-2">{friend.name}</h2>
      
      {/* Badges */}
      <div className="flex flex-col gap-2 mb-4">
        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(friend.status)}`}>
          {friend.status}
        </span>
        <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#166534]">
          {friend.tags?.[0] || 'Contact'}
        </span>
      </div>

      {/* Bio & Meta */}
      <p className="text-slate-500 italic text-sm mb-1">"{friend.bio}"</p>
      <p className="text-slate-400 text-xs mb-8">Preferred: {friend.email.split('@')[0]}</p>

      {/* Action Buttons */}
      <div className="w-full space-y-2">
        <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50">
          <Bell className="h-4 w-4" /> Snooze 2 Weeks
        </button>
        <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50">
          <Archive className="h-4 w-4" /> Archive
        </button>
        <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-lg text-red-500 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50">
          <Trash2 className="h-4 w-4" /> Delete
        </button>
      </div>
    </div>
  )
}