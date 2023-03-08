import { defineConfig } from 'vite'

import GlobPlugin from '../src/index'

export default defineConfig({
  plugins: [
    GlobPlugin(),
  ],
})
// "simple-git-hooks": {
//   "pre-commit": "pnpm lint-staged"
// },
// "lint-staged": {
//   "*": "eslint --fix"
// }
