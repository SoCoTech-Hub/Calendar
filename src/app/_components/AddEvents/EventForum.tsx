import React, { useContext } from "react";
import { Event } from "../Calendar/monthly";
import AddEvent from "../AddEvents/AddEventModel";

interface eventList {
  id: 1;
  name: "Event Name";
  time: "10:00 AM";
  datetime: "2023-12-27T10:00";
  href: "#";
}

export default function EventModal() {
  const { Event } = useContext("");
  const [title, setTitle] = useState("");
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form className="w-1/4 rounded-lg bg-white shadow-2xl">
        <header className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <span className="material-icons-outlined text-gray-400">
            Drag_Handle
          </span>
          <button>
            <span className="material-icons-outlined text-gray-400">Close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid-cols-1/5 grid items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </form>
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
