export default function RelationshipGoal({ friend }) {
  return (
    <div className="card bg-white shadow-sm border border-slate-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-[#166534]">Relationship Goal</h3>
        <button className="btn btn-sm btn-ghost bg-slate-50 border border-slate-200 text-slate-600 normal-case px-4">Edit</button>
      </div>
      <p className="text-slate-600">
        Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
      </p>
    </div>
  )
}

