/// <reference types="vite/client" />

// import Module from 'module'

interface ImportMeta {
  globNext<T>(glob: string): Record<string, () => Promise<T>>
}
