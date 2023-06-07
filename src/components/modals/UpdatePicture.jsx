import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const UpdatePicture = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal} className="text-green-400">
        Click here
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md shadow-xl transition-all">
                  <form className="w-full bg-white px-2 py-10 rounded-md shadow-lg flex flex-col gap-2 items-center text-green-800 text-sm">
                    <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-500">
                      Update Profile Picture
                    </h2>
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="w-32 h-32 rounded-xl shadow-lg"
                    />
                    <div className="w-full relative group">
                      <label className="text-xs pl-4">Profile picture</label>
                      <input
                        type="file"
                        className="w-full p-2 rounded-md outline-none file:border-0 file:px-4 file:py-1.5 file:bg-green-100 file:text-green-800 file:rounded-md"
                      />
                    </div>
                    <button className="w-full p-2 bg-gradient-to-b from-green-700 to-green-800 shadow-md rounded-md text-white hover:from-green-600 hover:to-green-700 transition ease-in-out duration-300">
                      Update
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdatePicture;
