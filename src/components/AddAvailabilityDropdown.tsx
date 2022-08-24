import React, { useState } from "react";

type AddAvailabilityDropdownProps = {
  dropdownActive: boolean;
  setDropdownActive: Function;
  availablePeriods: Array<Object>;
  setAvailablePeriods: Function;
};

function AddAvailabilityDropdown({ dropdownActive, setDropdownActive, availablePeriods, setAvailablePeriods }: AddAvailabilityDropdownProps) {
  let times = [
    {
      label: "9AM",
      value: 9,
    },
    {
      label: "10AM",
      value: 10,
    },
    {
      label: "11AM",
      value: 11,
    },
    {
      label: "12PM",
      value: 12,
    },
    {
      label: "1PM",
      value: 13,
    },
    {
      label: "2PM",
      value: 14,
    },
    {
      label: "3PM",
      value: 15,
    },
    {
      label: "4PM",
      value: 16,
    },
    {
      label: "5PM",
      value: 17,
    },
  ];

  const [inputFields , setInputFields] = useState({
      date: '2022-08-24',
      start: '9',
      end: '10',
  })

  const inputsHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void =>{
      setInputFields({...inputFields, [e.target.name]: e.target.value} )
  }

  const submitButton = () => {
    setDropdownActive(!dropdownActive);
    setAvailablePeriods([...availablePeriods, { date: inputFields.date, start: inputFields.start, end: inputFields.end }]);
  }

  const activeClassname = dropdownActive ? 'absolute' : 'hidden';

  return (
    <div
      className={activeClassname + ` top-full right-0 p-4 mt-3 overflow-hidden origin-top-right bg-white divide-gray-100 rounded-md shadow-lg focus:outline-none ring-1 ring-black ring-opacity-5`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-0-button"
    >
      <div className="mb-4">
        <label className="sr-only">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.date}
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 text-sm font-medium text-gray-700">From</label>
        <select
          id="start"
          name="start"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.start}
          className="block w-full py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {times.map((time) => (
            <option key={time.value} value={time.value}>{time.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="mb-2 text-sm font-medium text-gray-700">To</label>
        <select
          id="end"
          name="end"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.end}
          className="block w-full text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {times.map((time) => (
            <option key={time.value} value={time.value}>{time.label}</option>
          ))}
        </select>
      </div>
      <button className="w-full px-4 py-1 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => submitButton()}>Save</button>
    </div>
  );
}

export default AddAvailabilityDropdown;
