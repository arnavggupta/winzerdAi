"use client";

import Sidebar from "../../Components/Sidebar";
import DrawerSideBar from "@/Components/DrawerSideBar.1";
import { useState } from "react";

export default function Dashboard() {
  const [drawerState, setDrawerState] = useState(true);

  return (
    <div className="flex flex-col md:flex-row m-3 space-y-3 md:space-y-0 md:space-x-3">
      <DrawerSideBar val={drawerState} setval={setDrawerState} />
      {drawerState ? <Sidebar /> : <div></div>}
      <div className="flex-1">
        <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md">
          <div className="text-2xl font-bold">Dashboard</div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow">
              Need Help?
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow">
              Administrator
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow">
              You
            </button>
          </div>
        </header>
        <main className="p-5 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-800">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h2 className="text-lg font-semibold text-blue-800">Reports Pending Approval</h2>
              <p className="text-2xl font-bold text-blue-600 mt-2">₹ xyz</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h2 className="text-lg font-semibold text-green-800">Reports Pending Reimbursement</h2>
              <p className="text-2xl font-bold text-green-600 mt-2">₹ xyz</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h2 className="text-lg font-semibold text-purple-800">Number of Users</h2>
              <p className="text-2xl font-bold text-purple-600 mt-2">xyz</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
              Invite Employee / Add Admin
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow">
              View Reports and Summary
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow">
              Configure Settings
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Recent Transactions</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-700">Transaction details will appear here...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
