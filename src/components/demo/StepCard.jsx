import { FileText, Image, Mic, Video, UserCheck, Captions, Film, CheckCircle2, XCircle, Loader2 } from 'lucide-react'

const ICONS = { FileText, Image, Mic, Video, UserCheck, Captions, Film }

export default function StepCard({ step, isActive, onClick }) {
  const Icon = ICONS[step.icon] || FileText

  const statusConfig = {
    waiting: {
      border: 'border-dark-border',
      bg: 'bg-dark-elevated/50',
      iconBg: 'bg-dark-border',
      text: 'text-slate-600',
      labelColor: 'text-slate-500',
    },
    running: {
      border: `border-[${step.color}]`,
      bg: 'bg-dark-elevated',
      iconBg: '',
      text: 'text-white',
      labelColor: 'text-white',
    },
    done: {
      border: 'border-accent-green/40',
      bg: 'bg-dark-elevated',
      iconBg: 'bg-accent-green/15',
      text: 'text-white',
      labelColor: 'text-white',
    },
    error: {
      border: 'border-accent-red/40',
      bg: 'bg-dark-elevated',
      iconBg: 'bg-accent-red/15',
      text: 'text-accent-red',
      labelColor: 'text-accent-red',
    },
  }

  const cfg = statusConfig[step.status] || statusConfig.waiting
  const isRunning = step.status === 'running'
  const isDone = step.status === 'done'
  const isError = step.status === 'error'

  return (
    <div
      onClick={isDone ? onClick : undefined}
      className={`relative flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300 ${cfg.border} ${cfg.bg} ${
        isDone ? 'cursor-pointer hover:bg-dark-elevated' : 'cursor-default'
      } ${isActive && isDone ? 'ring-1 ring-accent-cyan/50' : ''}`}
      style={
        isRunning
          ? { borderColor: `${step.color}70`, boxShadow: `0 0 16px ${step.color}25` }
          : isDone && isActive
          ? { borderColor: 'rgba(0,212,255,0.4)' }
          : undefined
      }
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
        style={
          isRunning
            ? { backgroundColor: `${step.color}22`, border: `1.5px solid ${step.color}55` }
            : isDone
            ? { backgroundColor: `${step.color}18` }
            : { backgroundColor: 'rgba(255,255,255,0.04)' }
        }
      >
        {isRunning ? (
          <Loader2 size={16} style={{ color: step.color }} className="animate-spin" />
        ) : isDone ? (
          <CheckCircle2 size={16} className="text-accent-green" />
        ) : isError ? (
          <XCircle size={16} className="text-accent-red" />
        ) : (
          <Icon size={16} className="text-slate-600" />
        )}
      </div>

      {/* Labels */}
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-semibold leading-tight ${cfg.labelColor}`}>{step.label}</div>
        <div className="text-xs text-slate-600 truncate">{step.sublabel}</div>
      </div>

      {/* KPI / status */}
      <div className="flex-shrink-0 text-right">
        {isRunning && (
          <div className="text-xs" style={{ color: step.color }}>
            {step.kpi}
          </div>
        )}
        {isDone && (
          <span className="text-xs text-accent-green">完成</span>
        )}
        {step.status === 'waiting' && step.kpi && (
          <span className="text-xs text-slate-600">{step.kpi}</span>
        )}
      </div>

      {/* Running progress bar */}
      {isRunning && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl overflow-hidden">
          <div
            className="h-full rounded-b-xl animate-progress-fill"
            style={{ backgroundColor: step.color }}
          />
        </div>
      )}
    </div>
  )
}
