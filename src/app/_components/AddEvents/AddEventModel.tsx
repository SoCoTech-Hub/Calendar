import React,{ useState } from "react";
import type { ReactNode } from "react"
import type { Event } from "../Calendar/monthly";


interface AddEventModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  eventList: Event[];
  setEventList: (eventList: Event[]) => void;
  onAddEvent: (newEvent: Event) => void;
  forum: ReactNode;
}

const AddEventModal = (props: AddEventModalProps) => {
  const { forum, isOpen, setIsOpen, onAddEvent } = props;
  const [newEvent, setNewEvent] = useState<Event>({
    id: 0,
    name: "",
    time: "",
    datetime: "",
    href: "",
  });

  const handleAddEvent = () => {
    onAddEvent(newEvent);
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="text-black-400 bg-indigo-700 px-4 py-2">
      <button
        onClick={() => setIsOpen(false)}
        className="rounded-full bg-blue-500 text-white"
      >
        x
      </button>
      {forum}
      <button
        onClick={handleAddEvent}
        className="rounded-full bg-blue-500 text-white"
      >
        Save
      </button>
    </div>
  ) : null;
};

export default AddEventModal;
// const AddEventModal = ({label,isOpen,onClose,onAddEvent}:AddEventModalProps) => {
//   return (
//     <div
//       className={isOpen ? "text-black-400 bg-indigo-700 px-4 py-2" : "hidden"}
//     >
//       {label}
//     </div>
//   );
// };

// const AddEventModal = (props: AddEventModalProps) => {
//   return (
//     <div
//       className={props.isOpen ? "text-black-400 bg-indigo-700 px-4 py-2" : "hidden"}
//     >
//       {props.label}
//     </div>
//   );
// };

// function AddEventModal = (props: AddEventModalProps) => {
//   return (
//     <div
//       className={props.isOpen ? "text-black-400 bg-indigo-700 px-4 py-2" : "hidden"}
//     >
//       {props.label}
//     </div>
//   );
// };
