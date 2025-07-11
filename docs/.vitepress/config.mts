import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Verisense Blog",
  description: "Verisense Blog - AI Agent & Web3",

  // Enable internationalization
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Verisense Blog',
      description: 'AI Agent & Web3 Insights',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Articles', link: '/articles/' },
        ],
        sidebar: {
          '/articles/': [
            {
              text: 'AI Agent',
              items: [
                { text: 'Cybernetic Contracts', link: '/articles/cybernetic-contracts' },
                { text: 'Decentralized AI Agents', link: '/articles/de-agent-network' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/verisense-network' }
        ]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Verisense 博客',
      description: 'AI 智能体与 Web3 洞察',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文章', link: '/zh/articles/' },
        ],
        sidebar: {
          '/zh/articles/': [
            {
              text: 'AI 智能体',
              items: [
                { text: '赛博契约', link: '/zh/articles/cybernetic-contracts' },
                { text: '去中心化AI智能体网络', link: '/zh/articles/de-agent-network' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/verisense-network' }
        ]
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
