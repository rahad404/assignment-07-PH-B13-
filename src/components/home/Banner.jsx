import { UserPlus } from 'lucide-react'

export default function Banner() {
  return (
    <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
      </p>
      <button className="btn-primary mx-auto bg-[#244D3F]">
        <UserPlus className="h-5 w-5" />
        Add a Friend
      </button>
    </div>
  )
}