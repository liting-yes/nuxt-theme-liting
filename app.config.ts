/*
import { ThemeConfig } from '@nuxt/schema';
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 16:40:26
 * @FilePath: /nuxt-theme-liting/app.config.ts
 */
import type { ThemeConfig } from './utils/types'

export default defineAppConfig({
  theme: {
    title: 'Nuxt Theme Liting',
    description: 'a theme about nuxt',
    search: false,
    nav: {
      timeline: true,
      tag: true,
      expand: true,
      icon: {
        skin: true,
        i18n: false,
        github: {
          disabled: false,
          url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
        },
      },
    },
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme?: Partial<ThemeConfig>
  }

  interface Test {}
}
