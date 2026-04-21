"use client"

type MathJaxElement = HTMLElement

type MathJaxLike = {
  typeset?: (elements?: MathJaxElement[]) => void
  typesetPromise?: (elements?: MathJaxElement[]) => Promise<unknown>
  startup?: {
    promise?: Promise<unknown>
  }
}

export async function safelyTypesetMath(elements: MathJaxElement[]): Promise<void> {
  if (typeof window === "undefined" || elements.length === 0) return

  const mathJax = window.MathJax as MathJaxLike | undefined
  if (!mathJax) return

  try {
    if (typeof mathJax.typesetPromise === "function") {
      await mathJax.typesetPromise(elements)
      return
    }

    if (mathJax.startup?.promise) {
      await mathJax.startup.promise
      if (typeof mathJax.typesetPromise === "function") {
        await mathJax.typesetPromise(elements)
        return
      }
    }

    if (typeof mathJax.typeset === "function") {
      mathJax.typeset(elements)
    }
  } catch (error) {
    console.error("MathJax typesetting failed:", error)
  }
}
