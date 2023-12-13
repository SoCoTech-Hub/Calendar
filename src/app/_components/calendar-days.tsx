import React from "react";
import classNames from "@/app/snippets/classNames";
import { Day } from "./Calendar/monthly";

interface CalendarDaysProps {
  days: Day[];
  updateDate: (date: string) => void; // Ensure updateDate receives a date string
}

const CalendarDays: React.FC<CalendarDaysProps> = ({ days, updateDate }) => {
  return (
    <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
      {days.map((day: Day) => (
        <button
          key={day.date}
          type="button"
          className={classNames(
            day.isCurrentMonth ? "bg-white" : "bg-gray-50",
            (day.isSelected ?? day.isToday) && "font-semibold",
            day.isSelected && "text-white",
            !day.isSelected && day.isToday && "text-indigo-600",
            !day.isSelected &&
              day.isCurrentMonth &&
              !day.isToday &&
              "text-gray-900",
            !day.isSelected &&
              !day.isCurrentMonth &&
              !day.isToday &&
              "text-gray-500",
            "flex h-16 w-16 items-center justify-center p-2 hover:bg-gray-100 focus:z-10",
          )}
          onClick={() => updateDate(day.date)} // Pass the date string to updateDate
        >
          <time
            dateTime={day.date}
            className={classNames(
              day.isSelected &&
                "flex h-6 w-6 items-center justify-center rounded-full",
              day.isSelected && day.isToday && "bg-indigo-600",
              day.isSelected && !day.isToday && "bg-gray-900",
              "ml-auto",
            )}
          >
            {day?.date ? day.date?.split("-")?.pop()?.replace(/^0/, "") : ""}
          </time>
          <span className="sr-only">
            {day.events.length > 0
              ? `${day.events.length} events`
              : "No events"}
          </span>
          {day.events.length > 0 && (
            <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
              {day.events.map((event) => (
                <span
                  key={event.id}
                  className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                />
              ))}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CalendarDays;
