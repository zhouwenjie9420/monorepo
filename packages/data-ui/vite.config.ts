/*
 * @Author: Zhouwenjie
 * @Date: 2024-03-04 09:35:10
 * @LastEditors: Zhouwenjie
 * @LastEditTime: 2024-03-04 11:17:55
 * @FilePath: \monorepo-dataUI\packages\data-ui\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
})
