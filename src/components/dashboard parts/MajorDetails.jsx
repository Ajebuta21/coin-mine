import React from "react";

const MajorDetails = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-between text-green-800">
      <span>Account Information</span>
      <table class="border border-slate-200 table-auto border-separate border-spacing-2">
        <caption class="caption-bottom text-sm">
          Overview of account information.
        </caption>
        <tbody>
          <tr>
            <td class="border border-slate-200 p-2">Total Deposited</td>
            <td class="border border-slate-200 p-2">$28,300</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2">Total Whithdrawn</td>
            <td class="border border-slate-200 p-2">$58,300</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2">Earned Whithdrawn</td>
            <td class="border border-slate-200 p-2">$39,300</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2">Last Deposit</td>
            <td class="border border-slate-200 p-2">$2,500</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2">Last Withdrawal</td>
            <td class="border border-slate-200 p-2">$10,900</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MajorDetails;
