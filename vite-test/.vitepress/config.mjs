import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nashorn Foundation',
  description: 'A VitePress Site',

  // 设置 favicon
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }] // ✅ 放在根级
  ],

  themeConfig: {
    logo: '/icon.png', // 导航栏 Logo

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/NashornFoundation/nashorn-web '
      }
    ]
  },

  // 自定义主题样式
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use './custom-theme.scss'; // ✅ 使用相对路径
          `
        }
      }
    }
  }
})