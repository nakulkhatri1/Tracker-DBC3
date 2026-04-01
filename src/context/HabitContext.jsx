import { createContext, useContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const toggleHabit = (id) => {
    const today = new Date().toISOString().split("T")[0];

    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;

        const exists = h.completedDates.includes(today);

        return {
          ...h,
          completedDates: exists
            ? h.completedDates.filter((d) => d !== today)
            : [...h.completedDates, today],
        };
      })
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, toggleHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);