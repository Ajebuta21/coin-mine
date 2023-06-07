import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ShowWithdrawal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full bg-white min-h-screen py-[10vh] flex flex-col px-6">
      <div className="w-full flex gap-2 items-end justify-start text-green-800 py-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>

        <span className="font-semibold text-sm uppercase">
          withdrawal details
        </span>
      </div>
      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="bg-white border shadow-md px-4 md:px-8 w-full flex flex-col justify-center gap-10 py-10 items-center">
          <p class="mt-1 text-left w-full text-sm leading-6 text-gray-500">
            Transaction details.
          </p>
          <span className="w-full flex flex-col">
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">Amount:</span>
              <span>$2,650</span>
            </div>
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">Type:</span>
              <span>Withdrawal</span>
            </div>
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">Status:</span>
              <span>Confirmed</span>
            </div>
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">Payment Method:</span>
              <span>BTC</span>
            </div>
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">Paid to:</span>
              <span className="max-sm:text-xs">
                jbdFR343VvshYHSGWt524fsvvRD4
              </span>
            </div>
            <div className="p-3 border-b flex w-full justify-between items-center text-green-800 text-sm">
              <span className="font-semibold">To:</span>
              <span className="max-sm:text-xs">
                Misslesly
              </span>
            </div>
          </span>
          <button onClick={openModal} className="text-gray-500">
            Click here to change transaction status
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
                        <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
                          Transaction status.
                        </p>
                        <span className="flex gap-6 items-center">
                          <button className="w-24 py-1 rounded-md border border-green-500 bg-white hover:text-green-600 text-green-500 ease-in-out">
                            Confirm
                          </button>
                          <button className="w-24 py-1 rounded-md border border-red-500 bg-white hover:text-red-600 text-red-500 ease-in-out">
                            Reject
                          </button>
                        </span>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default ShowWithdrawal;
