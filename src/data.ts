export type Game = {
  id: string
  title: string
  description: string
  htmlPath: string
  createdAt: string
}

export type LlmModel = {
  id: string
  name: string
  description: string
  games?: Game[]
  quants?: Quant[]
}

export type Quant = {
  id: string
  name: string
  description: string
  games: Game[]
}

export const llmModels: LlmModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'General-purpose model with strong reasoning.',
    games: [
      {
        id: 'orbit-runner',
        title: 'Orbit Runner',
        description: 'Dodge incoming asteroids and keep orbiting.',
        htmlPath: 'games/gpt-4/orbit-runner.html',
        createdAt: '2026-01-15',
      },
    ],
  },
  {
    id: 'claude-3',
    name: 'Claude 3',
    description: 'Careful, high-precision assistant.',
    games: [
      {
        id: 'signal-maze',
        title: 'Signal Maze',
        description: 'Route the signal to the exit in as few moves as possible.',
        htmlPath: 'games/claude-3/signal-maze.html',
        createdAt: '2026-01-18',
      },
    ],
  },
  {
    id: 'qwen2-7b',
    name: 'Qwen2 7B',
    description: 'Open model with multiple quantized variants.',
    quants: [
      {
        id: 'awq',
        name: 'AWQ',
        description: 'Fast integer quantization for efficient inference.',
        games: [
          {
            id: 'memory-grid',
            title: 'Memory Grid',
            description: 'Flip tiles to match pairs before time runs out.',
            htmlPath: 'games/qwen2-7b/awq/memory-grid.html',
            createdAt: '2026-01-12',
          },
        ],
      },
      {
        id: 'gguf-q4',
        name: 'GGUF Q4',
        description: 'Compact quant for CPU-friendly usage.',
        games: [
          {
            id: 'pulse-chaser',
            title: 'Pulse Chaser',
            description: 'Collect pulses and avoid the red zones.',
            htmlPath: 'games/qwen2-7b/gguf-q4/pulse-chaser.html',
            createdAt: '2026-01-19',
          },
        ],
      },
    ],
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    description: 'Reasoning-focused model with quant options.',
    quants: [
      {
        id: 'q4-k-m',
        name: 'Q4_K_M',
        description: 'Balanced quality/size quantization.',
        games: [
          {
            id: 'signal-stacks',
            title: 'Signal Stacks',
            description: 'Stack signals in the right order to win.',
            htmlPath: 'games/deepseek-r1/q4-k-m/signal-stacks.html',
            createdAt: '2026-01-20',
          },
        ],
      },
    ],
  },
]
