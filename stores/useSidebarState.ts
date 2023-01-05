/*
 * @Date: 2023-01-05 00:22:47
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-06 01:18:44
 * @FilePath: /nuxt-theme-liting/stores/useSidebarState.ts
 */
import { defineStore } from 'pinia'

type SidebarExpanding = string | number

export const useSidebarState = defineStore('sidebar', () => {
  const expanding = ref<SidebarExpanding>()
  const updateExpanding = (val: SidebarExpanding = -1) => {
    expanding.value = val
  }

  return { expanding, updateExpanding }
})
