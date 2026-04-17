import { Heart, GitBranch, Share2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KeenKeeper</h3>
            <p className="text-gray-400">
              Keep your friendships alive by tracking your interactions and never losing touch with loved ones.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/timeline" className="hover:text-white transition">Timeline</a></li>
              <li><a href="/stats" className="hover:text-white transition">Stats</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <GitBranch className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Share2 className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for keeping friendships alive
          </p>
          <p className="text-sm mt-2">© 2024 KeenKeeper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}