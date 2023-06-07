import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const MakeWIthdrawal = () => {
  const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("amount", amount);
    sessionStorage.setItem("type", "withdrawal");
    setIsOpen(true);
  };

  function closeModal() {
    sessionStorage.removeItem("amount");
    sessionStorage.removeItem("type");
    setIsOpen(false);
  }

  const number = sessionStorage.getItem("amount");
  const formattedNumber = new Intl.NumberFormat().format(number);
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
            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
          />
        </svg>

        <span className="font-semibold text-sm uppercase">make withdrawal</span>
      </div>
      <div className="w-full h-[70vh] flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="w-full md:w-2/3 lg:w-1/3 bg-white px-2 py-10 flex flex-col gap-2 items-center text-gray-500 text-sm"
        >
          <h2 className="text-center font-semibold leading-9 tracking-tight text-gray-500">
            Enter the amount you wish to withdraw
          </h2>
          <div className="w-full relative group">
            <div className="absolute bg-slate-200 h-full w-fit flex justify-center items-center left-0 rounded-l-md px-4 text-gray-600">
              $
            </div>
            <input
              type="number"
              placeholder="Amount"
              className="w-full p-2 pl-12 border rounded-md outline-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="w-full p-2 bg-gradient-to-b from-green-700 to-green-800 shadow-md rounded-md text-white hover:from-green-600 hover:to-green-700 transition ease-in-out duration-300">
            Proceed
          </button>
        </form>
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
                      <h2 className="text-center font-semibold leading-9 tracking-tight text-gray-500">
                        Withdraw ${formattedNumber}
                      </h2>
                      <span className="flex gap-6 items-center">
                        <button className="w-24 p-1 bg-green-600 shadow-md rounded-md text-white hover:bg-green-500 transition ease-in-out duration-300">
                          Proceed
                        </button>
                        <button
                          onClick={closeModal}
                          className="w-24 p-1 bg-red-600 shadow-md rounded-md text-white hover:bg-red-500 transition ease-in-out duration-300"
                        >
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
      </div>
    </div>
  );
};

export default MakeWIthdrawal;
