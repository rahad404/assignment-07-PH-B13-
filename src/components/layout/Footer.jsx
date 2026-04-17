// import { Youtube, Facebook, Twitter } from 'lucide-react'
import { Video, MessageSquare, Send } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-[#1E3E31] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">   

        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>
        <p className="text-gray-300 max-w-lg text-sm md:text-base mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Social Links
          </span>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-ghost bg-white text-[#1E3E31] hover:bg-gray-200 border-none min-h-0 w-10 h-10 flex items-center justify-center">
              <Video className="h-5 w-5" />
            </a>
            <a href="#" className="btn btn-circle btn-ghost bg-white text-[#1E3E31] hover:bg-gray-200 border-none min-h-0 w-10 h-10 flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="#" className="btn btn-circle btn-ghost bg-white text-[#1E3E31] hover:bg-gray-200 border-none min-h-0 w-10 h-10 flex items-center justify-center">
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;