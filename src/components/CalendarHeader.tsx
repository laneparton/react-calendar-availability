import React, { useState } from "react";
import AddEventDropdown from "./AddEventDropdown";

type CalendarHeaderProps = {
  availablePeriods: Array<Object>;
  setAvailablePeriods: Function,
};

function CalendarHeader({ availablePeriods, setAvailablePeriods }: CalendarHeaderProps) {
  let [showDropdown, setShowDropdown] = useState(false);
    return (
      <header className="relative z-20 flex items-center justify-between flex-none px-6 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">
          <time dateTime="2022-01">August 2022</time>
        </h1>
        <div className="relative flex items-center">
          <div className="relative hidden md:ml-4 md:flex md:items-center">
            <button
              type="button"
              className="px-4 py-2 ml-6 text-sm font-medium text-indigo-600 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => console.log(availablePeriods)}
            >
              Output JSON
            </button>
            <div className="w-px h-6 ml-6 bg-gray-300"></div>
            <button
              type="button"
              className="px-4 py-2 ml-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Add event
            </button>
            <AddEventDropdown setDropdownActive={setShowDropdown} availablePeriods={availablePeriods} dropdownActive={showDropdown} setAvailablePeriods={setAvailablePeriods} />
          </div>
          <div className="relative ml-6 md:hidden">
            <button
              type="button"
              className="flex items-center p-2 -mx-2 text-gray-400 border border-transparent rounded-full hover:text-gray-500"
              id="menu-0-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    )
}

export default CalendarHeader