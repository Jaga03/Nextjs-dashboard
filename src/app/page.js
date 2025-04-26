import Sidebar from "./components/Siderbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed inset-y-0 left-0 z-10 bg-blue-900">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex-1 ml-64">
        <Dashboard />
      </div>
    </div>
  );
}
