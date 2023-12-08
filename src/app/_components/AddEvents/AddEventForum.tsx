import React from "react";

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
			{/* TimeDate might need to be auto generated from currently selected day */}
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