"use client";
import React, { useState, useEffect, useRef } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";
import Header from "../header";
import AddEventModal from "../AddEvents/AddEventModel";
import EventForum from "../AddEvents/EventForum";
import TimeLine from "../timeline";

export interface Event {
  id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
}

interface SelectedDay {
  events: Event[];
}

const initialSelectedDay: SelectedDay = {
  events: [],
};

export default function MonthlyCalendar() {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [selectedDay, setSelectedDay] =
    useState<SelectedDay>(initialSelectedDay);
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);

  // Sample refs, adjust based on your DOM structure
  const container = useRef<HTMLDivElement>(null);
  const containerNav = useRef<HTMLDivElement>(null);
  const containerOffset = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  useEffect(() => {
    const currentMinute = new Date().getHours() * 60;
    if (container.current && containerNav.current && containerOffset.current) {
      const { scrollHeight } = container.current;
      const navHeight = containerNav.current.offsetHeight ?? 0;
      const offsetHeight = containerOffset.current.offsetHeight ?? 0;
      container.current.scrollTop =
        ((scrollHeight - navHeight - offsetHeight) * currentMinute) / 1440;
    }
  }, [container, containerNav, containerOffset]);

  const updateDate = (date: Date) => {
    date = date || new Date();
    const formattedDate = date.toISOString();

    setSelectedDay({
      events: [
        {
          id: 1,
          name: "asdasdasd",
          time: "20:47",
          datetime: formattedDate,
          href: "#",
        },
        {
          id: 2,
          name: "asdasasdasddasd",
          time: "20:47",
          datetime: new Date().toISOString(),
          href: "#",
        },
      ],
    });
  };

  return (
    <div className="flex w-4/5 flex-col" style={{ height: "80vh" }}>
      <Header
        isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <TimeLine currentWeekStartDate={ currentDate} />
      <AddEventModal
        forum={<EventForum />}
        isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}
        eventList={eventList}
        setEventList={setEventList}
        onAddEvent={(newEvent: Event): void => {
          console.log(newEvent);
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
}
