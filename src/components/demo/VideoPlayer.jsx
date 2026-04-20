import { useState } from 'react'
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react'

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-xl overflow-hidden border-brand bg-dark-elevated shadow-card">
      {/* Screen */}
      <div className="relative aspect-video bg-gradient-to-br from-brand-900 via-dark-elevated to-brand-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Play/Pause */}
        <button
          onClick={() => setPlaying(!playing)}
          className="relative z-10 w-14 h-14 rounded-full bg-accent-orange/90 flex items-center justify-center cursor-pointer hover:bg-accent-orange transition-colors"
          aria-label={playing ? '暫停' : '播放'}
        >
          {playing ? (
            <Pause size={24} className="text-white" fill="white" />
          ) : (
            <Play size={24} className="text-white ml-1" fill="white" />
          )}
        </button>
        {/* Resolution badge */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan text-xs font-mono">
          1080p
        </div>
        {/* Fake subtitle */}
        {playing && (
          <div className="absolute bottom-8 inset-x-4 text-center">
            <span className="bg-black/70 text-white text-sm px-3 py-1 rounded">
              光合作用需要三樣東西：二氧化碳、水，還有太陽光。
            </span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setPlaying(!playing)}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label={playing ? '暫停' : '播放'}
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        {/* Fake progress bar */}
        <div className="flex-1 h-1.5 rounded-full bg-dark-border overflow-hidden cursor-pointer">
          <div
            className="h-full rounded-full bg-accent-orange transition-all duration-1000"
            style={{ width: playing ? '42%' : '10%' }}
          />
        </div>
        <span className="text-xs text-slate-500 font-mono flex-shrink-0">
          {playing ? '1:02' : '0:16'} / 2:40
        </span>
        <Volume2 size={15} className="text-slate-500 flex-shrink-0" />
        <Maximize2 size={14} className="text-slate-500 flex-shrink-0 cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  )
}
