const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.toLocaleString("default", { weekday: "long" });

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center mr-10 mb-12">
      <h1 className="text-2xl font-bold mb-4">{currentMonth}</h1>
      <h2 className="text-lg font-medium mb-4">{currentDay}</h2>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`flex items-center justify-center h-12 w-12 rounded-full ${
              day === currentDate.getDate()
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
