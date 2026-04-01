
import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const payload = {
      id: Date.now(),
      name: values.name,
      goalValue: values.goalValue,
      unit: values.unit,
      category: values.category,
      startDate: values.startDate,
      motivation: values.motivation,
      priority: values.priority,
      completedDates: [],
    };

    addHabit(payload);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name", { required: true })}
          placeholder="e.g. Morning Exercise"
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">Please enter a name</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          {...register("goalValue")}
          placeholder="30"
          className="border rounded px-3 py-2"
        />

        <select
          {...register("unit")}
          className="border rounded px-3 py-2"
        >
          <option>Minutes</option>
          <option>Hours</option>
          <option>Times</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="date"
          {...register("startDate")}
          className="border rounded px-3 py-2"
        />

        <select
          {...register("category")}
          className="border rounded px-3 py-2"
        >
          <option>Mindset</option>
          <option>Fitness</option>
          <option>Study</option>
        </select>
      </div>

      <textarea
        {...register("motivation")}
        placeholder="Why is this important to you?"
        className="border rounded px-3 py-2 w-full"
      />

      <div className="flex gap-4 text-sm">
        <label>
          <input type="radio" value="Low" {...register("priority")} /> Low
        </label>
        <label>
          <input type="radio" value="Medium" {...register("priority")} /> Medium
        </label>
        <label>
          <input type="radio" value="High" {...register("priority")} /> High
        </label>
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded">
        Create Habit
      </button>
    </form>
  );
};

export default HabitForm;


