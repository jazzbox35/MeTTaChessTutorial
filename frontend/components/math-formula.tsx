"use client"

import { useEffect, useRef } from "react"
import { safelyTypesetMath } from "@/lib/mathjax"

interface MathFormulaProps {
  formula: string
  display?: boolean
  className?: string
}

export function MathFormula({ formula, display = true, className = "" }: MathFormulaProps) {
  const formulaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formulaRef.current) return

    // Clean the formula to ensure proper rendering
    const cleanFormula = formula.trim()

    // Add the formula to the DOM with proper delimiters
    if (display) {
      // For display math, use the display math delimiters
      formulaRef.current.innerHTML = `\\[${cleanFormula}\\]`
    } else {
      // For inline math, use the inline math delimiters
      formulaRef.current.innerHTML = `\$$${cleanFormula}\$$`
    }

    void safelyTypesetMath([formulaRef.current])
  }, [formula, display])

  return <div ref={formulaRef} className={`math-formula ${className} ${display ? "math-display" : "math-inline"}`} />
}
