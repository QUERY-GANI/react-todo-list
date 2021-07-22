import { ReactComponent as Close } from "./close.svg"

export default function Delete({ isMounted, toggleModal }: { isMounted: boolean; toggleModal: () => void }) {
  return (
    <div className={`flex absolute h-full w-full transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col m-auto w-9/12">
        <div className="flex justify-between items-center p-5 rounded-t bg-green-500">
          <h1 className="font-orienta text-xl">Delete list</h1>
          <Close className="cursor-pointer" width="40" height="40" onClick={toggleModal} />
        </div>
        <div className="flex justify-between text-white font-poppins">
          <button className="mt-5 bg-indigo-500 p-3 rounded" onClick={toggleModal}>
            Cancel
          </button>
          <button className="mt-5 bg-indigo-500 p-3 rounded">Delete</button>
        </div>
      </div>
    </div>
  )
}
