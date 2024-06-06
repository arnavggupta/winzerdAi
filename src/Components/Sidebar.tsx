import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="bg-white text-blue-800 flex flex-col p-4 shadow-lg rounded-lg">
      <div className="text-xl font-bold mb-6">Navigation</div>
      <nav className="flex flex-col space-y-4">
        <Link legacyBehavior href="/dashboard">
          <a className="hover:bg-blue-100 px-4 py-2 rounded-lg text-md transition duration-300 ease-in-out">Dashboard</a>
        </Link>
        <Link legacyBehavior href="/expense-reports">
          <a className="hover:bg-blue-100 px-4 py-2 rounded-lg text-md transition duration-300 ease-in-out">Expense Reports</a>
        </Link>
        <Link legacyBehavior href="/employees-management">
          <a className="hover:bg-blue-100 px-4 py-2 rounded-lg text-md transition duration-300 ease-in-out">Employees Management</a>
        </Link>
        <Link legacyBehavior href="/management-reports">
          <a className="hover:bg-blue-100 px-4 py-2 rounded-lg text-md transition duration-300 ease-in-out">Management Reports</a>
        </Link>
        <Link legacyBehavior href="/admin">
          <a className="hover:bg-blue-100 px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out">Admin</a>
        </Link>
      </nav>
    </div>
  );
}
