"use client"

import { useEffect, useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

interface CarouselDotsProps {
  api: CarouselApi | undefined
}

export function CarouselDots({ api }: CarouselDotsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    setScrollSnaps(api.scrollSnapList())
    setSelectedIndex(api.selectedScrollSnap())

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="flex justify-center gap-2 mt-4 md:hidden">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`size-2 rounded-full transition-all ${
            index === selectedIndex
              ? "bg-primary"
              : "bg-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}
