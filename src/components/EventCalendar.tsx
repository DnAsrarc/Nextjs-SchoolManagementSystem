"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { enUS } from "date-fns/locale"; // Import English locale

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY event data
const events = [
  {
    id: 1,
    title: "Event title",
    time: "12:00 PM - 2:00 PM",
    description: "Event title sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Event title",
    time: "12:00 PM - 2:00 PM",
    description: "Event title sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Event title",
    time: "12:00 PM - 2:00 PM",
    description: "Event title sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  // Format the selected date using date-fns with 'enUS' locale (English)
  const formattedDate = format(value as Date, "MMMM yyyy", { locale: enUS });

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US" // Set locale for the calendar to English
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        {/* <p>{formattedDate}</p>  Display the formatted date */}
        <img src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
