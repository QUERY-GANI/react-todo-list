// import Create from "./Create"

// function App() {
//   return (
//     <div>
//       <h1 className="font-poppins text-xl text-center font-bold pt-5">Simple Todo List</h1>
//       <div className="p-10 font-orienta">
//         <div className="flex flex-col items-start justify-between">
//           <h1 className="text-lg">Titlenya</h1>
//           <button className="bg-black text-white p-3 rounded">Create list</button>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Create list
                </Dialog.Title>

                <div className="flex flex-col font-poppins">
                  <input id="title" type="text" className="input appearance-none focus:outline-none rounded border border-gray-400 px-3 py-3 pt-5 pb-2" placeholder="" />
                  <label htmlFor="title" className="label relative mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base">
                    TITLE
                  </label>
                  <div className="flex justify-between text-white">
                    <button className="mt-5 bg-indigo-500 p-3 rounded" onClick={closeModal}>
                      Cancel
                    </button>
                    <button className="mt-5 bg-indigo-500 p-3 rounded">Submit</button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
