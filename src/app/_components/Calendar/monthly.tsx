"use client";
import {  useState } from "react";
import {  ClockIcon, } from "@heroicons/react/20/solid";
import AddEventModal from "../AddEvents/AddEventModel";
//import { time } from "drizzle-orm/mysql-core"
import EventForum from "../AddEvents/EventForum";
import Header from "../header"
import classNames from "@/app/snippets/classNames"
import EventItem from "../event"

export interface Event {
  id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
}

export interface Day {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  events: Event[];
}

interface SelectedDay {
  events: Event[];
}

const initialSelectedDay: SelectedDay = {
  events: [],
};

const days: Day[] = [
  { date: "2023-12-27", events: [] },
  { date: "2023-12-28", events: [] },
  { date: "2023-12-29", events: [] },
  { date: "2023-12-30", events: [] },
  { date: "2023-12-31", events: [] },
  { date: "2024-01-01", isCurrentMonth: true, events: [] },
  { date: "2024-01-02", isCurrentMonth: true, events: [] },
  {
    date: "2023-12-27",
    events: [
      {
        id: 1,
        name: "Event Name",
        time: "10:00 AM",
        datetime: "2023-12-27T10:00",
        href: "#",
      },
      {
        id: 2,
        name: "Sales meeting",
        time: "2PM",
        datetime: "2024-01-03T14:00",
        href: "#",
      },
    ],
  },
  { date: "2024-01-04", isCurrentMonth: true, events: [] },
  { date: "2024-01-05", isCurrentMonth: true, events: [] },
  { date: "2024-01-06", isCurrentMonth: true, events: [] },
  {
    date: "2024-01-07",
    isCurrentMonth: true,
    events: [
      {
        id: 3,
        name: "Date night",
        time: "6PM",
        datetime: "2024-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2024-01-08", isCurrentMonth: true, events: [] },
  { date: "2024-01-09", isCurrentMonth: true, events: [] },
  { date: "2024-01-10", isCurrentMonth: true, events: [] },
  { date: "2024-01-11", isCurrentMonth: true, events: [] },
  {
    date: "2024-01-12",
    isCurrentMonth: true,
    isToday: true,
    events: [
      {
        id: 6,
        name: "San-Mari's birthday party",
        time: "2PM",
        datetime: "2024-01-25T14:00",
        href: "#",
      },
    ],
  },
  { date: "2024-01-13", isCurrentMonth: true, events: [] },
  { date: "2024-01-14", isCurrentMonth: true, events: [] },
  { date: "2024-01-15", isCurrentMonth: true, events: [] },
  { date: "2024-01-16", isCurrentMonth: true, events: [] },
  { date: "2024-01-17", isCurrentMonth: true, events: [] },
  { date: "2024-01-18", isCurrentMonth: true, events: [] },
  { date: "2024-01-19", isCurrentMonth: true, events: [] },
  { date: "2024-01-20", isCurrentMonth: true, events: [] },
  { date: "2024-01-21", isCurrentMonth: true, events: [] },
  {
    date: "2024-01-22",
    isCurrentMonth: true,
    isSelected: true,
    events: [
      {
        id: 4,
        name: "Maple syrup museum",
        time: "3PM",
        datetime: "2024-01-22T15:00",
        href: "#",
      },
      {
        id: 5,
        name: "Hockey game",
        time: "7PM",
        datetime: "2024-01-22T19:00",
        href: "#",
      },
    ],
  },
  { date: "2024-01-23", isCurrentMonth: true, events: [] },
  { date: "2024-01-24", isCurrentMonth: true, events: [] },
  { date: "2024-01-25", isCurrentMonth: true, events: [] },
  { date: "2024-01-26", isCurrentMonth: true, events: [] },
  { date: "2024-01-27", isCurrentMonth: true, events: [] },
  { date: "2024-01-28", isCurrentMonth: true, events: [] },
  { date: "2024-01-29", isCurrentMonth: true, events: [] },
  { date: "2024-01-30", isCurrentMonth: true, events: [] },
  { date: "2024-01-31", isCurrentMonth: true, events: [] },
  { date: "2024-02-01", events: [] },
  { date: "2024-02-02", events: [] },
  { date: "2024-02-03", events: [] },
  {
    date: "2024-02-04",
    events: [
      {
        id: 7,
        name: "Cinnabon day!",
        time: "9PM",
        datetime: "2024-02-04T21:00",
        href: "#",
      },
    ],
  },
  { date: "2024-02-05", events: [] },
  { date: "2024-02-06", events: [] },
];
//const selectedDay = days.find((day: { isSelected: z.boolean() }) => day.isSelected);


export default function MonthlyCalendar() {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [selectedDay, setSelectedDay] =
    useState<SelectedDay>(initialSelectedDay);

  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const updateDate = (e: unknown) => {
    console.log(e);
    setSelectedDay({
      events: [
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
      ],
    });
  };
  const openAddEventModal = () => {
    setAddEventModalOpen(true);
  };

  const closeAddEventModal = () => {
    setAddEventModalOpen(false);
  };

  return (
  
    <div className="lg:flex lg:h-full lg:flex-col">
      <Header  isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}/>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            <span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {days.map((day) => (
              <EventItem day={day}/>
            ))}
          </div>
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {days.map((day) => (
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
                  "flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10",
                )}
                onClick={(e) => updateDate(e)}
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
                  {day?.date
                    ? day.date?.split("-")?.pop()?.replace(/^0/, "")
                    : ""}
                </time>
                <span className="sr-only">{day.events.length} events</span>
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
        </div>
      </div>
      
      <AddEventModal
        forum={<EventForum />}
        isOpen={isAddEventModalOpen}
        setIsOpen={setAddEventModalOpen}
        eventList={eventList}
        setEventList={setEventList} // Ensure setEventList is typed for Event[]
        onAddEvent={function (newEvent: Event): void {
          throw new Error("Function not implemented.")
        } }      />
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
