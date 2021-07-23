import Create from "./Create"
import { useModal } from "./Modal"

function App() {
  const [shouldRenderChild, toggleModal] = useModal()
  return (
    <div>
      {shouldRenderChild && <Create toggleModal={toggleModal} isMounted={shouldRenderChild} />}
      <h1 className="font-poppins text-xl text-center font-bold pt-5">Simple Todo List</h1>
      <div className="p-10 font-orienta">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-lg">Titlenya</h1>
          <button className="bg-black text-white p-3 rounded" onClick={toggleModal}>
            Create list
          </button>
        </div>
      </div>
    </div>
  )
}
export default App
