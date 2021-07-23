import { useEffect, useState } from "react"

export const useModal = (): [boolean, () => void] => {
  const [isMounted, setMounted] = useState(false)

  function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = useState(false)
    useEffect(() => {
      let timeoutId: NodeJS.Timeout
      if (isMounted && !shouldRender) {
        setShouldRender(true)
      } else if (!isMounted && shouldRender) {
        timeoutId = setTimeout(() => setShouldRender(false), delayTime)
      }
      return () => clearTimeout(timeoutId)
    }, [isMounted, shouldRender, delayTime])
    return shouldRender
  }

  const shouldRenderChild = useDelayUnmount(isMounted, 500)

  const toggleModal = () => {
    setMounted(!isMounted)
  }
  return [shouldRenderChild, toggleModal]
}
