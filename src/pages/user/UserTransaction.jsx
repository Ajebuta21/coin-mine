import React from 'react'

const UserTransaction = () => {
function getStatusDot(status) {
  let dotColor = "";

  if (status === "Pending") {
    dotColor = "orange";
  } else if (status === "Confirmed") {
    dotColor = "green";
  } else if (status === "Failed") {
    dotColor = "red";
  }

  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: dotColor,
      }}
    />
  );
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
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="font-semibold text-sm uppercase">
          all transactions
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            $22,650
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Confirmed")}Confirmed
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Deposit
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            21/06/2023 at 11:05PM
          </div>
        </div>
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            $11,650
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Failed")}Failed
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Deposit
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            21/06/2023 at 11:05PM
          </div>
        </div>
        <div className="w-full p-1 grid grid-cols-4 gap-1 max-sm:text-xs">
          <div className="w-full h-full flex justify-start items-center">
            $1,650
          </div>
          <div className="w-full h-full flex gap-1 justify-start items-center">
            {getStatusDot("Pending")}Pending
          </div>
          <div className="w-full h-full flex justify-start items-center">
            Withdrawal
          </div>
          <div className="w-full h-full flex justify-end items-center text-right">
            21/06/2023 at 08:52AM
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTransaction