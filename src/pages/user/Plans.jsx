import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Plans = () => {
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
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
        <span className="font-semibold text-sm uppercase">All Plans</span>
      </div>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 text-green-800 gap-6">
        <div className="w-full px-4 py-6 shadow-md border border-green-800 flex flex-col items-center gap-6">
          <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
            Bronze Plan
          </p>
          <div className="w-full flex justify-around items-center">
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">2%</h3>
              <p className="text-xs text-gray-500">Roi</p>
            </span>
            <span className="text-xs text-gray-500">for</span>
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">90</h3>
              <p className="text-xs text-gray-500">Day(s)</p>
            </span>
          </div>
          <div className="flex flex-col w-full text-sm">
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Minimum amount</span>
              <span>$500</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Maximum amount</span>
              <span>$3,999</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Returns</span>
              <span>180%</span>
            </p>
          </div>
          <button
            onClick={openModal}
            className="px-2 py-1 bg-green-800 shadow-md rounded-md text-white hover:bg-white hover:text-green-800 transition ease-in-out duration-300 border border-green-800"
          >
            Get Started
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
                          Suscribe to plan
                        </h2>
                        <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
                          To get started with this plan eneter a valid amount below
                        </p>
                        <div className="w-full relative group">
                          <div className="absolute bg-slate-200 h-full w-fit flex justify-center items-center left-0 rounded-l-md px-4 text-gray-600">
                            $
                          </div>
                          <input
                            type="number"
                            placeholder="Amount"
                            className="w-full p-2 pl-12 border rounded-md outline-none"
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
        </div>
        <div className="w-full px-4 py-6 shadow-md border border-green-800 flex flex-col items-center gap-6">
          <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
            Silver Plan
          </p>
          <div className="w-full flex justify-around items-center">
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">3%</h3>
              <p className="text-xs text-gray-500">Roi</p>
            </span>
            <span className="text-xs text-gray-500">for</span>
            <span className="flex flex-col items-center">
              <h3 className="text-2xl">90</h3>
              <p className="text-xs text-gray-500">Day(s)</p>
            </span>
          </div>
          <div className="flex flex-col w-full text-sm">
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Minimum amount</span>
              <span>$4,000</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Maximum amount</span>
              <span>$9,999</span>
            </p>
            <p className="w-full flex items-center justify-between border-b border-dashed py-2">
              <span className="font-semibold">Returns</span>
              <span>270%</span>
            </p>
          </div>
          <button
            onClick={openModal}
            className="px-2 py-1 bg-green-800 shadow-md rounded-md text-white hover:bg-white hover:text-green-800 transition ease-in-out duration-300 border border-green-800"
          >
            Get Started
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
                          Suscribe to plan
                        </h2>
                        <p class="mt-1 text-center w-full text-sm leading-6 text-gray-500">
                          To get started with this plan eneter a valid amount below
                        </p>
                        <div className="w-full relative group">
                          <div className="absolute bg-slate-200 h-full w-fit flex justify-center items-center left-0 rounded-l-md px-4 text-gray-600">
                            $
                          </div>
                          <input
                            type="number"
                            placeholder="Amount"
                            className="w-full p-2 pl-12 border rounded-md outline-none"
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
        </div>
      </div>
    </div>
  );
};

export default Plans;
