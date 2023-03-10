<!--
 * @Date: 2022-12-31 17:11:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 23:46:12
 * @FilePath: /nuxt-theme-liting/components/liting/Header.vue
-->
<script lang="ts" setup>
const { themeConfig } = useThemeConfig()
const colorMode = useColorMode()

const { disabled, setLang, currentLocale } = useLocale()
const handleClickLocale = (lang: string) => {
  setLang && setLang(lang)
}
const homePath = computed(() => {
  if (disabled.value || currentLocale?.value?.prefix === '') return '/'
  return currentLocale?.value?.prefix
})

const menuPopperVisible = ref(false)
</script>

<template>
  <header
    class="liting-header fixed z-10 w-screen h-16 drop-shadow-2xl flex justify-between items-center px-3 backdrop-blur bg-yellow-100/50 dark:bg-slate-800"
  >
    <NuxtLink :to="homePath" class="interact-btn no-underline font-bold text-2xl flex items-center gap-1">
      <ClientOnly>
        <img v-if="themeConfig?.logo" class="w-8 h-8 sm:w-12 sm:h-12" src="../../public/logo.png" alt="logo" />
      </ClientOnly>
      <span v-if="themeConfig?.title" class="hidden sm:block">{{ themeConfig.title }}</span>
    </NuxtLink>
    <div class="px-3 hidden sm:flex justify-end items-center gap-4">
      <NuxtLink
        v-if="themeConfig?.nav?.timeline"
        :to="`${currentLocale?.prefix}/timeline`"
        class="interact-btn text-lg no-underline"
        >{{ currentLocale?.nav?.timeline }}</NuxtLink
      >
      <NuxtLink v-if="themeConfig?.nav?.tag" :to="`${currentLocale?.prefix}/tag`" class="interact-btn text-lg no-underline">{{
        currentLocale?.nav?.tag
      }}</NuxtLink>
      <NuxtLink
        v-if="themeConfig?.nav?.extra"
        :to="`${currentLocale?.prefix}/extra`"
        class="interact-btn text-lg no-underline"
        >{{ currentLocale?.nav?.extra }}</NuxtLink
      >
      <ClientOnly>
        <ElDropdown
          v-if="themeConfig?.locales"
          size="small"
          trigger="click"
          popper-class="liting-header__popper"
          @command="handleClickLocale"
        >
          <div class="i-ion:language-outline text-[var(--text-color)] interact-btn text-2xl" />
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem
                v-for="locale in themeConfig.locales"
                :key="locale.lang"
                class="!text-[var(--text-color)] interact-btn text-sm"
                :command="locale.lang"
                >{{ locale.text }}</ElDropdownItem
              >
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </ClientOnly>
      <template v-if="themeConfig?.nav?.icon?.skin">
        <div
          v-show="colorMode.preference === 'system'"
          class="i-material-symbols:desktop-windows-outline interact-btn text-2xl"
          @click="colorMode.preference = 'light'"
        />
        <div
          v-show="colorMode.preference === 'light'"
          class="i-material-symbols:light-mode-outline interact-btn text-2xl"
          @click="colorMode.preference = 'dark'"
        />
        <div
          v-show="colorMode.preference === 'dark'"
          class="i-material-symbols:dark-mode-rounded interact-btn text-2xl"
          @click="colorMode.preference = 'system'"
        />
      </template>
      <NuxtLink
        v-if="!(themeConfig?.nav?.icon?.github as Theme.NavIconGithub).disabled"
        :to="(themeConfig?.nav?.icon?.github as Theme.NavIconGithub).url"
        target="_blank"
      >
        <div class="i-iconoir:github interact-btn text-2xl" />
      </NuxtLink>
    </div>
    <div class="flex sm:hidden items-center justify-end gap-2">
      <ClientOnly>
        <ElDropdown
          size="small"
          trigger="click"
          popper-class="liting-header__popper"
          @visible-change="(val) => (menuPopperVisible = val)"
        >
          <div
            class="text-[var(--text-color)] text-2xl interact-btn"
            :class="menuPopperVisible ? 'i-mingcute:close-fill' : 'i-mingcute:menu-fill'"
          ></div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-if="themeConfig?.nav?.timeline">
                <NuxtLink :to="`${currentLocale?.prefix}/timeline`" class="interact-btn text-sm no-underline">{{
                  currentLocale?.nav?.timeline
                }}</NuxtLink>
              </el-dropdown-item>
              <el-dropdown-item v-if="themeConfig?.nav?.tag">
                <NuxtLink :to="`${currentLocale?.prefix}/tag`" class="interact-btn text-sm no-underline">{{
                  currentLocale?.nav?.tag
                }}</NuxtLink>
              </el-dropdown-item>
              <el-dropdown-item v-if="themeConfig?.nav?.extra">
                <NuxtLink :to="`${currentLocale?.prefix}/extra`" class="interact-btn text-sm no-underline">{{
                  currentLocale?.nav?.extra
                }}</NuxtLink>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </ElDropdown>
      </ClientOnly>
      <ClientOnly>
        <ElDropdown
          v-if="themeConfig?.locales"
          size="small"
          trigger="click"
          popper-class="liting-header__popper"
          @command="handleClickLocale"
        >
          <div class="i-ion:language-outline text-[var(--text-color)] interact-btn text-2xl" />
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem
                v-for="locale in themeConfig.locales"
                :key="locale.lang"
                class="!text-[var(--text-color)] interact-btn text-sm"
                :command="locale.lang"
                >{{ locale.text }}</ElDropdownItem
              >
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </ClientOnly>
      <template v-if="themeConfig?.nav?.icon?.skin">
        <div
          v-show="colorMode.preference === 'system'"
          class="i-material-symbols:desktop-windows-outline interact-btn text-2xl"
          @click="colorMode.preference = 'light'"
        />
        <div
          v-show="colorMode.preference === 'light'"
          class="i-material-symbols:light-mode-outline interact-btn text-2xl"
          @click="colorMode.preference = 'dark'"
        />
        <div
          v-show="colorMode.preference === 'dark'"
          class="i-material-symbols:dark-mode-rounded interact-btn text-2xl"
          @click="colorMode.preference = 'system'"
        />
      </template>
      <NuxtLink
        v-if="!(themeConfig?.nav?.icon?.github as Theme.NavIconGithub).disabled"
        :to="(themeConfig?.nav?.icon?.github as Theme.NavIconGithub).url"
        target="_blank"
      >
        <div class="i-iconoir:github interact-btn text-2xl" />
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.liting-header {
  &__popper {
    --el-bg-color-overlay: var(--bg-color);
    --el-dropdown-menuItem-hover-fill: var(--bg-color);
    --el-dropdown-menuItem-hover-color: var(--active-color);

    .el-popper__arrow {
      display: none;
    }
  }
}
</style>
