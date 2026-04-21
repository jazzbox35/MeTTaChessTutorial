"use client"

import { useEffect, useRef } from "react"
import { safelyTypesetMath } from "@/lib/mathjax"

interface DirectMathProps {
  formula: string
  className?: string
}

export function DirectMath({ formula, className = "" }: DirectMathProps) {
  const mathRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mathRef.current) return

    mathRef.current.textContent = formula
    void safelyTypesetMath([mathRef.current])
  }, [formula])

  return <div ref={mathRef} className={`math-formula ${className}`} />
}
