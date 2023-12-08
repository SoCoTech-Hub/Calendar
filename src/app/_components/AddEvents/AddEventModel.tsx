// AddEventModal.tsx
import React, { ReactNode } from "react";
import { Event } from "../Calendar/monthly";

interface AddEventModalProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
  eventList: Event[]; // Change the type to Event[]
  setEventList(event: Event[]): void;
  forum: ReactNode;
}

const AddEventModal = (props: AddEventModalProps) => {
  const { forum, isOpen, setIsOpen, eventList, setEventList } = props;

  const handleAddEvent = () => {
    // Create a new Event object with id as a number
    const newEvent: Event = {
      id: 1, // Example: Assign a number as the id
      name: "New Event",
      time: "string",
      datetime: "string",
      href: "string",
      // ... other properties
}
    };

    // Add the new event to the selected day's events
    setEventList([...eventList, newEvent]);

    // Close the modal
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className={isOpen ? "text-black-400 bg-indigo-700 px-4 py-2" : "hidden"}>
      <button
        onClick={() => props.setIsOpen(!isOpen)}
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



