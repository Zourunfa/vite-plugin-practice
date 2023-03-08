import { dirname } from 'path'
import type { Plugin } from 'vite'
import fg from 'fast-glob'
export interface Options {}
const importGlobRE = /\bimport\.meta\.globNext\((.*)\)/g

// 下滑线是antfu配置的一个eslint规则，跳过检测没有用到的变量
export default function (_options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-glob',
    async transform(code, id) {
      const matchs = Array.from(code.matchAll(importGlobRE))
      if (!matchs?.length) return

      for (const match of matchs) {
        const glob = match[1].slice(1, -1)

        const files = await fg(glob, {
          dot: true,
          cwd: dirname(id),
        })

        const start = match.index!
        const end = start + match[0].length
        const replacement = `{${files.map(i => `'${i}':()=>import('${i}')`).join(', ')}}`
        code = code.slice(0, start) + replacement + code.slice(end)
        console.log({ code })
      }
      return code
    },
  }
}
