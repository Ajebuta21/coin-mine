import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const DeleteAccount = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal} className="text-red-400">
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
                  <div className="p-10 flex flex-col items-center gap-4 bg-white">
                    <h2 className="text-center text-2xl font-semibold tracking-tight text-gray-500">
                      Delete account?
                    </h2>
                    <span className="flex gap-6 items-center">
                      <button className="w-24 py-1 rounded-md border border-green-600 bg-green-600 text-white hover:opacity-70 transition-opacity ease-in-out">
                        Confirm
                      </button>
                      <button onClick={closeModal} className="w-24 py-1 rounded-md border border-red-600 bg-red-600 text-white hover:opacity-70 transition-opacity ease-in-out">
                        Cancel
                      </button>
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteAccount;
