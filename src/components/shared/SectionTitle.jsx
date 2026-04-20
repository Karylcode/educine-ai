export default function SectionTitle({ tag, title, highlight, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25">
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-dark-base' : 'text-white'}`}>
        {title}
        {highlight && (
          <> <span className="text-gradient-cyan">{highlight}</span></>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-slate-600' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
