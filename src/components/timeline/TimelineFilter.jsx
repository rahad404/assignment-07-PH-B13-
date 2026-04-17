'use client'

import { ChevronDown, Filter } from 'lucide-react'

export default function TimelineFilter({ filter, setFilter }) {
  const filters = ['all', 'Call', 'Text', 'Video']

  return (
    <div className="dropdown dropdown-end">
      {/* The Trigger Button */}
      <div 
        tabIndex={0} 
        role="button" 
        className="btn bg-white hover:bg-slate-50 border-slate-200 text-slate-700 normal-case flex items-center gap-2 shadow-sm rounded-xl px-5 h-10 min-h-0"
      >
        <Filter className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-sm">
          {filter === 'all' ? 'All Activity' : filter}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
      </div>

      {/* The Dropdown Menu */}
      <ul 
        tabIndex={0} 
        className="dropdown-content z-[20] menu p-1.5 shadow-xl bg-white border border-slate-100 rounded-xl w-48 mt-2"
      >
        {filters.map((f) => (
          <li key={f}>
            <button
              onClick={() => {
                setFilter(f)
                // This ensures the dropdown closes after selection
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur()
                }
              }}
              className={`capitalize py-2.5 rounded-lg text-sm transition-all mb-0.5 last:mb-0 ${
                filter === f
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f}
              {filter === f && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-900" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}