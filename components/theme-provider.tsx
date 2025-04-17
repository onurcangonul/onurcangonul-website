"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = true,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}