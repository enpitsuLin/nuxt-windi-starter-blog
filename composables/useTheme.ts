import type { BasicColorSchema } from '@vueuse/core'
import { useColorMode } from '@vueuse/core'

export function useTheme() {
  const theme = useColorMode({ storageKey: 'theme' })
  const toggleTheme = (newTheme?: BasicColorSchema) => {
    theme.value = (() => {
      if (newTheme)
        return newTheme
      return theme.value === 'dark' ? 'light' : 'dark'
    })()
  }
  return { theme, toggleTheme }
}
