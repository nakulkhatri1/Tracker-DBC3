import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

const Dashboard = () => {
  return (
    <div className="h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <h1 className="text-lg font-bold text-slate-800">
              Track Your Journey
            </h1>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <button className="w-full px-3 py-2 bg-slate-100 rounded-md text-sm font-medium">
            Dashboard
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded">
            <p className="text-xs text-slate-500">STATUS</p>
            <p className="text-xs text-slate-600 mt-1">
              You're on a 5-day streak. Keep it going!
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white px-6 py-4">
          <span className="text-xs bg-slate-100 px-3 py-2 rounded-2xl font-semibold">
            Goal: 75%
          </span>
        </header>

        <div className="flex-1 grid grid-cols-3 gap-6 p-6 ">
          <div className="col-span-2 p-6 rounded-xl bg-white border-b-slate-400">
            <h2 className="font-bold mb-4 ">Active Habits</h2>
            <HabitList />
          </div>

          <div className="bg-white p-6 rounded-xl ">
            <h2 className="font-bold mb-4">Add Habit</h2>
            <HabitForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
