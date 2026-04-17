export default function TimelineFilter({ filter, setFilter }) {
  const filters = ['all', 'Call', 'Text', 'Video']

  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-lg capitalize transition-colors ${
            filter === f
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}