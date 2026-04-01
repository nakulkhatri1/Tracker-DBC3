import { useHabit } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  const { toggleHabit, deleteHabit } = useHabit();

  const today = new Date().toISOString().split("T")[0];
  const done = habit.completedDates.includes(today);

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-slate-800">{habit.name}</h3>
        <p className="text-xs text-gray-500">{habit.category}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => toggleHabit(habit.id)}
          className={`px-3 py-1 rounded text-white ${
            done ? "bg-gray-400" : "bg-green-500"
          }`}
        >
          {done ? "Done" : "Mark"}
        </button>

        <button
          onClick={() => deleteHabit(habit.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;