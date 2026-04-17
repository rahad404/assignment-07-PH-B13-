export default function LoadingSpinner() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner text-neutral"></span>
        <p className="text-base-content/70">
          Loading your friends...
        </p>
      </div>
    </div>
  )
}