import { useState, useEffect } from 'react'

const useKey = (key: string) => {
  // Keep track of key state
  const [pressed, setPressed] = useState(false)
  const [timeDown, setTimeDown] = useState(null as any)
  const [timeElapsed, setTimeElapsed] = useState(null as any)

  // Does an event match the key we're watching?
  const match = (event: KeyboardEvent) => key.toLowerCase() == event.key.toLowerCase()

  // Event handlers
  const onDown = (event: KeyboardEvent) => {
      if (match(event)) {
        setPressed(true)
        setTimeDown(new Date())
      }
  }

  const onUp = (event: KeyboardEvent) => {
      if (match(event)) { 
        setPressed(false)
        const now = new Date() as any;
        setTimeElapsed(now - timeDown)
      }
  }

  // Bind and unbind events
  useEffect(() => {
      window.addEventListener("keydown", onDown)
      window.addEventListener("keyup", onUp)
      return () => {
          window.removeEventListener("keydown", onDown)
          window.removeEventListener("keyup", onUp)
      }
  }, [key])

  return {
    pressed,
    timeElapsed
  }
}

export default useKey;