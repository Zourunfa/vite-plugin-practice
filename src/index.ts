import type { Plugin } from 'vite'
export interface Options {

}
const importGlobRE = /\bimport\.meta\.globNext\((.*)\)/g

// 下滑线是antfu配置的一个eslint规则，跳过检测没有用到的变量
export default function (_options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-glob',
    transform(code, id) {
      const matchs = Array.from(code.matchAll(importGlobRE))
      if (!matchs?.length)
        return

      for (const match of matchs) {
        const glob = match[1]
        // const files = fg(glob, { dot: true, cwd: dirname(id) })
        console.log({ glob, id })
      }
    },
  }
}
