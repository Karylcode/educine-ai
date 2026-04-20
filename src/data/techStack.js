export const MODELS = [
  { module: 'LLM 劇本', model: 'Qwen 3.5-14B-Instruct', params: '14B', vram: '~10 GB', license: 'Apache 2.0', color: '#0ea5e9' },
  { module: '繁中潤稿', model: 'MediaTek Breeze 2-8B', params: '8B', vram: '~6 GB', license: 'Apache 2.0', color: '#8b5cf6' },
  { module: 'Embedding', model: 'BAAI/bge-m3', params: '~560M', vram: '~2 GB', license: 'MIT', color: '#06b6d4' },
  { module: '文生圖', model: 'Qwen-Image-Lightning', params: '~20B', vram: '~20 GB', license: 'Apache 2.0', color: '#f59e0b' },
  { module: 'TTS 主力', model: 'OpenBMB VoxCPM2', params: '—', vram: '~6 GB', license: 'Apache 2.0', color: '#ec4899' },
  { module: 'Image-to-Video', model: 'Wan 2.2-I2V-A14B', params: '14B MoE', vram: '~24 GB', license: 'Apache 2.0', color: '#f97316' },
  { module: '嘴型同步', model: 'TMElyralab MuseTalk', params: '—', vram: '~8 GB', license: 'MIT', color: '#10b981' },
  { module: '語音轉字幕', model: 'Whisper-v3 Large', params: '1.5B', vram: '~4 GB', license: 'MIT', color: '#3b82f6' },
]

export const HARDWARE = {
  model: 'Acer Predator Orion 7000 (PO7-665)',
  cpu: 'Intel Core Ultra 9 285K',
  gpu: 'NVIDIA RTX 5090 32GB GDDR7',
  ram: '64GB DDR5',
  storage: '2TB NVMe SSD × 2',
  os: 'Windows 11 Pro',
}
