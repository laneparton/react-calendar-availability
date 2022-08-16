import React, { useState } from "react";

type AddEventDropdownProps = {
  dropdownActive: boolean;
  availableBlocks: Array<Object>;
  setAvailableBlocks: Function;
};

function AddEventDropdown({ availableBlocks, setAvailableBlocks }: AddEventDropdownProps) {
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
      date: '2022-08-15',
      start: '9',
      end: '10',
      label: 'Breakfast',
  })

  const inputsHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void =>{
    console.log(e.target.name, e.target.value);
      setInputFields({...inputFields, [e.target.name]: e.target.value} )
  }

  const submitButton = () =>{
    setAvailableBlocks([...availableBlocks, { date: inputFields.date, label: inputFields.label, start: inputFields.start, end: inputFields.end }]);
  }

  return (
    <div
      className="absolute top-0 right-0 p-4 mt-3 overflow-hidden origin-top-right bg-white divide-gray-100 rounded-md shadow-lg focus:outline-none ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-0-button"
    >
      <div className="mb-4">
        <label className="sr-only">Email</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.date}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="sr-only">Label</label>
        <input
          type="input"
          name="label"
          id="label"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.label}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">From</label>
        <select
          id="start"
          name="start"
          onChange={(e) => inputsHandler(e)}
          value={inputFields.start}
          className="block w-full text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {times.map((time) => (
            <option key={time.value} value={time.value}>{time.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">To</label>
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
      <button onClick={() => submitButton()}>Add</button>
    </div>
  );
}

export default AddEventDropdown;
