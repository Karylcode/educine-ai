import { useGenerationPipeline } from '../hooks/useGenerationPipeline'
import InputPanel from '../components/demo/InputPanel'
import PipelineProgress from '../components/demo/PipelineProgress'
import OutputPanel from '../components/demo/OutputPanel'
import { useState } from 'react'

const TABS = ['參數設定', '生成流程', '輸出預覽']

export default function DemoPage() {
  const pipeline = useGenerationPipeline()
  const [mobileTab, setMobileTab] = useState(1)

  const handleGenerate = (params) => {
    if (pipeline.status === 'completed') pipeline.reset()
    setTimeout(() => pipeline.start(params), 50)
  }

  const handleReset = () => {
    pipeline.reset()
    setMobileTab(0)
  }

  return (
    <div className="min-h-screen bg-dark-base pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white font-heading">互動原型 Demo</h1>
          <p className="text-sm text-slate-500 mt-1">
            輸入任意教學主題，模擬 EduCine AI 完整生成流程（模擬版本，不連接後端）
          </p>
        </div>

        {/* Mobile tabs */}
        <div className="lg:hidden flex gap-1 mb-4 bg-dark-surface rounded-xl p-1 border-brand">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setMobileTab(i)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                mobileTab === i
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid grid-cols-[280px_1fr_280px] gap-4" style={{ minHeight: 'calc(100vh - 220px)' }}>
          <div className="flex flex-col">
            <InputPanel
              onGenerate={handleGenerate}
              isRunning={pipeline.status === 'running'}
              isCompleted={pipeline.status === 'completed'}
            />
            {pipeline.status === 'completed' && (
              <button
                onClick={handleReset}
                className="mt-3 w-full py-2.5 rounded-xl text-sm text-slate-400 border border-dark-border hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors cursor-pointer"
              >
                重置
              </button>
            )}
          </div>
          <PipelineProgress
            steps={pipeline.steps}
            status={pipeline.status}
            currentStepIndex={pipeline.currentStepIndex}
            completedOutputs={pipeline.completedOutputs}
            elapsedMs={pipeline.elapsedMs}
            formatElapsed={pipeline.formatElapsed}
          />
          <OutputPanel
            completedOutputs={pipeline.completedOutputs}
            steps={pipeline.steps}
          />
        </div>

        {/* Mobile: tab-based */}
        <div className="lg:hidden" style={{ minHeight: 'calc(100vh - 260px)' }}>
          {mobileTab === 0 && (
            <div>
              <InputPanel
                onGenerate={(params) => { handleGenerate(params); setMobileTab(1) }}
                isRunning={pipeline.status === 'running'}
                isCompleted={pipeline.status === 'completed'}
              />
              {pipeline.status === 'completed' && (
                <button onClick={handleReset} className="mt-3 w-full py-2.5 rounded-xl text-sm text-slate-400 border border-dark-border cursor-pointer">
                  重置
                </button>
              )}
            </div>
          )}
          {mobileTab === 1 && (
            <PipelineProgress
              steps={pipeline.steps}
              status={pipeline.status}
              currentStepIndex={pipeline.currentStepIndex}
              completedOutputs={pipeline.completedOutputs}
              elapsedMs={pipeline.elapsedMs}
              formatElapsed={pipeline.formatElapsed}
            />
          )}
          {mobileTab === 2 && (
            <OutputPanel
              completedOutputs={pipeline.completedOutputs}
              steps={pipeline.steps}
            />
          )}
          {/* Auto-advance mobile tab on generation start */}
          {pipeline.status === 'running' && mobileTab === 0 && setMobileTab(1)}
        </div>
      </div>
    </div>
  )
}
