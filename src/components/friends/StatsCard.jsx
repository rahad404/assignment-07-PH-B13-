export default function StatsCards({ friend }) {
  const StatBox = ({ label, value, subValue }) => (
    <div className="card bg-white shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center min-h-[140px]">
      <p className="text-4xl font-bold text-[#1E293B] mb-2">{value}</p>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      {subValue && <p className="text-slate-400 text-xs mt-1">{subValue}</p>}
    </div>
  )

  return (
    <div className="grid grid-cols-3 gap-4">
      <StatBox label="Days Since Contact" value={friend.days_since_contact} />
      <StatBox label="Goal (Days)" value={friend.goal} />
      <StatBox 
        label="Next Due" 
        value={new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} 
      />
    </div>
  )
}