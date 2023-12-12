import React, { useState } from "react";
import AddEventModal from "../AddEvents/AddEventModel";
import type { Event } from "../Calendar/monthly";
import {
  ArrowsPointingOutIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export default function EventModal() {
  const [title, setTitle] = useState<string>("");
  const [href, setHref] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [eventList, setEventList] = useState<Event[]>([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  function findLargestId(): number {
    return eventList.reduce((largestId, event) => {
      return event?.id && event.id > largestId ? event.id : largestId;
    }, 0);
  }

  const handleAddEvent = () => {
    const id = findLargestId();
    const newId = id + 1;
    setEventList([
      ...eventList,
      { id: newId, datetime: date, name: title, time: time, href: href },
    ]);
    setIsOpen(false);
  };
  const currentDate = new Date();
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form className="w-1/4 rounded-lg bg-white shadow-2xl">
        <header className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <ArrowsPointingOutIcon className="w-6 rotate-45 fill-green-500" />

          <button onClick={handleCloseModal}>
            <XMarkIcon className="w-6 fill-green-500" />
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-rows-5 items-end gap-y-7">
            <input
              className="text-black"
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="url"
              placeholder="Add URL"
              value={href}
              onChange={(e) => setHref(e.target.value)}
            />

            <input
              className="text-black"
              type="datetime-local"
              name="Start Date"
              placeholder={currentDate.toString()}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <input
              className="text-black"
              type="datetime-local"
              name="End Date"
              placeholder={currentDate.toString()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button onClick={handleAddEvent}>
            <MapPinIcon className="w-6 fill-violet-900" />
          </button>
        </div>
      </form>

      <AddEventModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        eventList={eventList}
        setEventList={setEventList}
        onAddEvent={handleAddEvent}
        forum=""
      />
    </div>
  );
}

{
  /* <AddEventForum /> */
}
{
  /* 
export default function form() {
	return (
		<form>
			<label>
				Name:
				<input type="text" name="Name" value="Event"/>
			</label>

			<label>
				Time:
				<input type="text" name="Time" value="9AM"/>
			</label>
			/* TimeDate might need to be auto generated from currently selected day *
			<label>
				TimeDate:
				<input type="text" name="TimeDate" />
			</label>
		
			<label>
				Href:
				<input type="text" name="Href" value="#"/>
			</label>
		</form>
	)	
}
*/
}
