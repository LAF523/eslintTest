import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import path from 'path';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/eslintTest/',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src') // 源文件根目录
    }
  },
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {
          //配置全局变量
          blue: '#1CC0FF'
        },
        additionalData: '@import "./src/global.less";'
      }
    }
  },
  server: {
    open: true, // 自动打开浏览器
    port: 3000, // 服务端口
    proxy: {
      '/api': 'http://127.0.0.1:3000', // api代理路径
      '/mock': '' // mock代理路径
    }
  }
});
