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
          { text: 'AI Agent', link: '/ai-agent/cybernetic-contracts' },
          { text: '2025 Report', link: '/2025' },
        ],
        sidebar: [
          {
            text: 'AI Agent',
            items: [
              { text: 'Cybernetic Contracts', link: '/ai-agent/cybernetic-contracts' },
              { text: 'Decentralized AI Agents', link: '/ai-agent/de-agent-network' }
            ]
          },
          {
            text: 'Annual Reports',
            items: [
              { text: '2025 Report', link: '/2025' }
            ]
          }
        ],
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
          { text: 'AI 智能体', link: '/zh/ai-agent/cybernetic-contracts' },
          { text: '2025 年报', link: '/zh/2025' },
        ],
        sidebar: [
          {
            text: 'AI 智能体',
            items: [
              { text: '赛博契约', link: '/zh/ai-agent/cybernetic-contracts' },
              { text: '去中心化AI智能体网络', link: '/zh/ai-agent/de-agent-network' }
            ]
          },
          {
            text: '年度报告',
            items: [
              { text: '2025 年报', link: '/zh/2025' }
            ]
          }
        ],
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
