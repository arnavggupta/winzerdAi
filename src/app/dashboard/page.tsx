import Sidebar from "../../Components/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex m-3 space-x-3">
      <Sidebar/>
      <div className="flex-1">
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <div className="text-lg font-bold">Dashboard</div>
          <div className="flex space-x-4">
            <button>Need Help?</button>
            <button>Administrator</button>
            <button>You</button>
          </div>
        </header>
        <main className="p-5 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-800">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-blue-800">Reports Pending Approval</h2>
              <p className="text-2xl font-bold text-blue-600 mt-2">₹ xyz</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-green-800">Reports Pending Reimbursement</h2>
              <p className="text-2xl font-bold text-green-600 mt-2">₹ xyz</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-purple-800">Number of Users</h2>
              <p className="text-2xl font-bold text-purple-600 mt-2">xyz</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-8 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Invite Employee / Add Admin
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              View Reports and Summary
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Configure Settings
            </button>
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Recent Transactions</h2>
                  </div>
        </main>
      </div>
    </div>
  );
}
