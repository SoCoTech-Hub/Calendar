import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { Dispatch, Fragment, SetStateAction } from "react";
import ViewButton from "./AddEvents/ViewButton";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define getWeekNumber at the top
const getWeekNumber = (date: Date) => {
  const today = new Date(date);
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export default function Header({
  isOpen,
  setIsOpen,
  currentDate,
  setCurrentDate,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}) {
  const pathname = usePathname();

  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth(),
  );
  const [currentWeek, setCurrentWeek] = useState<number>(
    getWeekNumber(currentDate),
  );

 useEffect(() => {
  const getCurrentDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("en-za", options);
  };
  if (!currentDate) {
    setCurrentDate(new Date());
  }
}, []);
  const handlePrevMonthClick = () => {
  setCurrentMonth((prevMonth) => {
    const newMonth = prevMonth - 1 < 0 ? 11 : prevMonth - 1;
    const newYear = newMonth === 11 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
    const newDate = new Date(currentDate);
    newDate.setMonth(newMonth);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
    return newMonth;
  });
};

const handleNextMonthClick = () => {
  setCurrentMonth((prevMonth) => {
    const newMonth = prevMonth + 1 > 11 ? 0 : prevMonth + 1;
    const newYear = newMonth === 0 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const newDate = new Date(currentDate);
    newDate.setMonth(newMonth);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
    return newMonth;
  });
};
  const handlePrevWeekClick = () => {
    setCurrentWeek((prevWeek) => prevWeek - 1);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeekClick = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const getCurrentDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("en-za", options);
  };

  return (
    <header className="flex items-center justify-between border-b border-white bg-gray-600 px-6 py-4 lg:flex-none">
      <h1 className="indent-center text-base font-semibold leading-6 text-black">
        <time dateTime={currentDate.toISOString()}>
          {getCurrentDate(currentDate)}
        </time>
      </h1>
      <div className="items-right flex">
        <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
          <button
            type="button"
            className="justify-right flex h-9 w-12 items-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            onClick={
              pathname === "/weekly"
                ? handlePrevWeekClick
                : handlePrevMonthClick
            }
          >
            <span className="sr-only">{`Previous ${
              pathname === "/weekly" ? "week" : "month"
            }`}</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            onClick={
              pathname === "/weekly"
                ? handleNextWeekClick
                : handleNextMonthClick
            }
          >
            <span className="sr-only">{`Next ${
              pathname === "/weekly" ? "week" : "month"
            }`}</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          {pathname == "/weekly" ? (
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Weekly View
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <ViewButton url="/" label="Monthly View" />
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Monthly View
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <ViewButton url="/weekly" label="Weekly View" />
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}

          <div className="ml-6 h-6 w-px bg-gray-300" />
          <ViewButton
                      onClick={() => setIsOpen(!isOpen)}
                      label="Create Event"
                      className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" url={""}          />
        </div>
        <Menu as="div" className="relative ml-6 md:hidden">
          <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <ViewButton
                    onClick={() => setIsOpen(!isOpen)}
                    label="Create Event" url={""}                  />
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <ViewButton url="/" label="Monthly View" />
                  </Menu.Item>
                  <Menu.Item>
                    <ViewButton url="/weekly" label="Weekly View" />
                  </Menu.Item>
                </Menu.Items>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
