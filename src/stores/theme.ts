import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: 'light',
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    changeTheme(value: string) {
      this.theme = value
    },
  },
})
