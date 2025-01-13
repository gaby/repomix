import { defineConfig } from 'vitepress';

export const configEn = defineConfig({
  lang: 'en-US',
  description: 'Pack your codebase into AI-friendly formats',
  themeConfig: {
    nav: [
      // guide
      { text: 'Guide', link: '/guide/' },
      { text: 'Join Discord', link: 'https://discord.gg/wNYzTwZFku' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Basic Usage', link: '/guide/usage' },
            { text: 'Prompt Examples', link: '/guide/prompt-examples' },
            { text: 'Output Formats', link: '/guide/output' },
            { text: 'Command Line Options', link: '/guide/command-line-options' },
            { text: 'Remote Repository Processing', link: '/guide/remote-repository-processing' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Custom Instructions', link: '/guide/custom-instructions' },
            { text: 'Comment Removal', link: '/guide/comment-removal' },
            { text: 'Security', link: '/guide/security' },
            {
              text: 'Tips & Tricks',
              items: [{ text: 'Best Practices', link: '/guide/tips/best-practices' }],
            },
            {
              text: 'Development',
              items: [
                { text: 'Contributing', link: '/guide/development/' },
                { text: 'Setup', link: '/guide/development/setup' },
              ],
            },
          ],
        },
      ],
    },
  },
});