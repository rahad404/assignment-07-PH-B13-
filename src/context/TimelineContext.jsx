'use client'

import { createContext, useState, useEffect } from 'react'

export const TimelineContext = createContext()

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('timelineEntries')
    if (saved) {
      setEntries(JSON.parse(saved))
    }
  }, [])

  const addEntry = (entry) => {
    const newEntries = [entry, ...entries]
    setEntries(newEntries)
    localStorage.setItem('timelineEntries', JSON.stringify(newEntries))
  }

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  )
}