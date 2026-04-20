export const FEATURES = [
  {
    id: 'local',
    title: '全本地運行，資料不離校',
    desc: '所有 AI 模型在校內工作站執行，影片素材、劇本、學生資料永遠不會上傳到任何雲端服務，符合個資法與學校資安規範。',
    size: 'large',
    icon: 'Shield',
    color: '#0ea5e9',
  },
  {
    id: 'gpu',
    title: 'RTX 5090 推論加速',
    desc: '32GB GDDR7 VRAM，可跑 2026 最新旗艦模型無需降級。',
    size: 'medium',
    icon: 'Cpu',
    color: '#8b5cf6',
  },
  {
    id: 'subtitle',
    title: '自動字幕（Whisper v3）',
    desc: '語音轉文字並自動產生 SRT 字幕時間軸，支援中文與台語。',
    size: 'medium',
    icon: 'Captions',
    color: '#06b6d4',
  },
  {
    id: 'curriculum',
    title: '對齊教育部課綱',
    desc: '內建 RAG 課綱向量庫，劇本自動引用正確課綱術語。',
    size: 'small',
    icon: 'BookOpen',
    color: '#10b981',
  },
  {
    id: 'export',
    title: '一鍵匯出 MP4',
    desc: '1080p / 30fps / H.264，相容所有裝置播放。',
    size: 'small',
    icon: 'Download',
    color: '#f59e0b',
  },
  {
    id: 'license',
    title: '商用授權，放心使用',
    desc: '全部模型採 Apache 2.0 / MIT 授權，產出影片著作權清晰。',
    size: 'small',
    icon: 'BadgeCheck',
    color: '#f97316',
  },
]

export const PROBLEMS = [
  {
    stat: '8小時',
    label: '製作一支教學影片平均耗時',
    desc: '從寫腳本、找素材、錄音到剪輯，一支 3 分鐘的影片讓老師精疲力竭。',
    icon: 'Clock',
  },
  {
    stat: '70%',
    label: '老師不熟悉剪輯軟體',
    desc: 'Premiere、CapCut 學習曲線陡峭，大多數教師沒有時間學習。',
    icon: 'AlertCircle',
  },
  {
    stat: '4種',
    label: '現有 AI 工具需分開使用',
    desc: 'ChatGPT 寫腳本、Midjourney 畫圖、Runway 生成影片——全都割裂。',
    icon: 'Puzzle',
  },
]
