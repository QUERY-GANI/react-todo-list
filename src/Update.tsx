import { ReactComponent as Close } from "./close.svg"

export default function Update({ isMounted, toggleModal }: { isMounted: boolean; toggleModal: () => void }) {
  return (
    <div className={`flex absolute h-full w-full transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col m-auto w-9/12">
        <div className="flex justify-between items-center p-5 rounded-t bg-green-500">
          <h1 className="font-orienta text-xl">Update list</h1>
          <Close className="cursor-pointer" width="40" height="40" onClick={toggleModal} />
        </div>
        <div className="flex flex-col p-5 font-poppins rounded-b bg-green-700">
          <input id="title" type="text" className="input appearance-none focus:outline-none rounded border border-gray-400 px-3 py-3 pt-5 pb-2" placeholder="" />
          <label htmlFor="title" className="label relative mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base">
            TITLE
          </label>
          <div className="flex justify-between text-white">
            <button className="mt-5 bg-indigo-500 p-3 rounded" onClick={toggleModal}>
              Cancel
            </button>
            <button className="mt-5 bg-indigo-500 p-3 rounded">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
