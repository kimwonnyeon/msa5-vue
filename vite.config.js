import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
//vite 번들러의 설정을 저장하는 파일
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
