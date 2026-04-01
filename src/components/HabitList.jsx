import { useHabit } from "../context/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits } = useHabit();

  if (habits.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        No habits yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;