import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { TimelineProvider } from '@/context/TimelineContext'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'KeenKeeper - Keep Your Friendships Alive',
  description: 'Track and maintain your friendships with smart reminders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TimelineProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
        </TimelineProvider>
      </body>
    </html>
  )
}