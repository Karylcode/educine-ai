export default function Badge({ children, color = '#0ea5e9', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold font-mono ${className}`}
      style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}40` }}
    >
      {children}
    </span>
  )
}
