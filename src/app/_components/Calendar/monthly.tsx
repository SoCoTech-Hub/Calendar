"use client";
import React, { useState, lazy } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";
import AddEventModal from "../AddEvents/AddEventModel";
import EventForum from "../AddEvents/EventForum";
import Header from "../header";
import EventItem from "../event";
import WeekDays from "../week-days";
import CalendarDays from "../calendar-days";
import GetDaysInMonth from "@/app/snippets/getDaysInMonth"

export interface Event {
  id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
}

export interface Day {
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDayOff: boolean;
  events: Event[];
}

interface SelectedDay {
  events: Event[];
}

const initialSelectedDay: SelectedDay = {
  events: [],
};



const MonthlyCalendar: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] =
    useState<SelectedDay>(initialSelectedDay);
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const EventForum = React.lazy(() => import("../AddEvents/EventForum"));
  const updateDate = (e: unknown) => {
    console.log(e);
    const selectedEvents: Event[] = [
      {
        id: 1,
        name: "asdasdasd",
        time: "20:47",
        datetime: new Date().toISOString(),
        href: "#",
      },
      {
        id: 2,
        name: "asdasasdasddasd",
        time: "20:47",
        datetime: new Date().toISOString(),
        href: "#",
      },
    ];

    setSelectedDay({
      events: selectedEvents,
    });
  };

  const openAddEventModal = () => {
    setAddEventModalOpen(true);
  };

  const closeAddEventModal = () => {
    setAddEventModalOpen(false);
  };
  ``;

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <Header
        isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
      />
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <WeekDays />
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {GetDaysInMonth(
              currentDate.getFullYear(),
              currentDate.getMonth(),
            ).map((day) => (
              <EventItem key={day.date} day={day} />
            ))}
          </div>
          <CalendarDays
            days={GetDaysInMonth(
              currentDate.getFullYear(),
              currentDate.getMonth(),
            )}
            updateDate={updateDate}
          />
        </div>
      </div>
      <AddEventModal
        forum={<EventForum />}
        isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}
        eventList={eventList}
        setEventList={setEventList} // Ensure setEventList is typed for Event[]
        onAddEvent={(newEvent: Event) => {
          // Implement your logic for adding an event
        }}
      />
      {selectedDay?.events ? (
        <div className="px-4 py-10 sm:px-6 lg:hidden">
          <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
            {selectedDay?.events.map((event: Event) => (
              <li
                key={event.id}
                className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <p className="font-semibold text-gray-900">{event.name}</p>
                  <time
                    dateTime={event.datetime}
                    className="mt-2 flex items-center text-gray-700"
                  >
                    <ClockIcon
                      className="mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {event.time}
                  </time>
                </div>
                <a
                  href={event.href}
                  className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                >
                  Edit<span className="sr-only">, {event.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MonthlyCalendar