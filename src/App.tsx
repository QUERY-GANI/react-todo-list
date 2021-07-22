import { useEffect } from "react"
import { useState } from "react"
import Create from "./Create"

function App() {
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

  return (
    <div>
      {shouldRenderChild && <Create toggleModal={toggleModal} isMounted={isMounted} />}
      <button className="bg-indigo-500 text-white ml-5 p-3 rounded mt-5" onClick={toggleModal}>
        Create list
      </button>
    </div>
  )
}
export default App
