
'use client'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="text-center max-w-lg">

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default ErrorPage;