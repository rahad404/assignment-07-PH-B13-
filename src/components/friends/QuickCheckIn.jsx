'use client'

import { useContext } from 'react'
import { Phone, MessageSquare, Video } from 'lucide-react'
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

    const toastStyles = {
      Call: { background: '#16A34A', color: '#FFFFFF' },
      Text: { background: '#F59E0B', color: '#1F2937' },
      Video: { background: '#2563EB', color: '#FFFFFF' },
    }

    toast.success(`${type} logged successfully! ✅`, {
      style: toastStyles[type] || { background: '#1F2937', color: '#FFFFFF' },
    })
  }

  // Reusable sub-component to keep the JSX clean
  const ActionButton = ({ icon: Icon, label, onClick }) => (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] rounded-xl border border-transparent hover:border-slate-200 transition-all group"
    >
      <Icon 
        className="h-8 w-8 mb-2 text-slate-700 group-hover:scale-110 transition-transform" 
        strokeWidth={1.5} 
      />
      <span className="text-slate-600 font-medium">{label}</span>
    </button>
  )

  return (
    <div className="card bg-white shadow-sm border border-slate-100 p-8">
      <h3 className="text-lg font-bold text-[#166534] mb-6">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-6">
        <ActionButton 
          icon={Phone} 
          label="Call" 
          onClick={() => handleInteraction('Call')} 
        />
        <ActionButton 
          icon={MessageSquare} 
          label="Text" 
          onClick={() => handleInteraction('Text')} 
        />
        <ActionButton 
          icon={Video} 
          label="Video" 
          onClick={() => handleInteraction('Video')} 
        />
      </div>
    </div>
  )
}