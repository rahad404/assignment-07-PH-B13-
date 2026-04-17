// Format a raw date string into a readable format
export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Tailwind color class based on friend status
export function getStatusColor(status) {
  switch (status) {
    case "overdue":     return "bg-red-100 text-red-600";
    case "almost due":  return "bg-yellow-100 text-yellow-600";
    case "on-track":    return "bg-green-100 text-green-600";
    default:            return "bg-gray-100 text-gray-600";
  }
}

// Return an icon string based on interaction type
export function getInteractionIcon(type) {
  switch (type) {
    case "Call":  return "📞";
    case "Text":  return "💬";
    case "Video": return "🎥";
    default:      return "🔔";
  }
}
