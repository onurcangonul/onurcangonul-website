"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import notFoundImageWhite from "../public/images/not-pass-white.webp"
import notFoundImageBlack from "../public/images/not-pass.webp"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    if (stored === "dark" || stored === "light") {
      setTheme(stored)
    }
  }, [])

  const imageSrc = theme === "light" ? notFoundImageBlack : notFoundImageWhite

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <Image
          src={imageSrc}
          alt="Not found illustration"
          width={500}
          height={500}
          className="mx-auto rounded-md"
        />
      </div>
      <Link href="/">
        <Button>Go back to homepage</Button>
      </Link>
    </div>
  )
}
