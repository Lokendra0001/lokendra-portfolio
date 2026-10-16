'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'system' | 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = (localStorage.getItem('theme-preference') as Theme) || 'system'
    setTheme(stored)
    applyTheme(stored)
  }, [])

  const applyTheme = (t: Theme) => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (t === 'dark') {
      root.classList.add('dark')
    } else if (t === 'light') {
      root.classList.add('light')
    }
    // If 'system', classes are removed and CSS @media (prefers-color-scheme: dark) takes over natively!
  }

  const cycleTheme = () => {
    const nextTheme: Record<Theme, Theme> = {
      system: 'dark',
      dark: 'light',
      light: 'system',
    }
    const next = nextTheme[theme]
    setTheme(next)
    localStorage.setItem('theme-preference', next)
    applyTheme(next)
  }

  if (!mounted) {
    return <div className="size-7 rounded-full" aria-hidden="true" />
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
      title={`Current: ${theme} theme. Click to cycle (System → Dark → Light)`}
      aria-label={`Switch theme, current: ${theme}`}
    >
      {theme === 'dark' ? (
        <Moon className="size-3.5" aria-hidden="true" />
      ) : theme === 'light' ? (
        <Sun className="size-3.5" aria-hidden="true" />
      ) : (
        <span className="relative flex items-center justify-center">
          <Sun className="size-3.5 dark:hidden" aria-hidden="true" />
          <Moon className="size-3.5 hidden dark:block" aria-hidden="true" />
        </span>
      )}
    </button>
  )
}
