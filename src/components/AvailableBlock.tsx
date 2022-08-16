import React from "react";
import moment from 'moment';

type AvailableBlockProps = {
  date: Date,
  label: string,
  start: number,
  end: number
};

function AvailableBlock({ date, label, start, end}: AvailableBlockProps) {
  const dateCol = moment(date).day();
  let span = end - start;
  let fixedStart = start - 7;
  console.log(date, start, end);
  console.log(dateCol, fixedStart, span);

  return (
    <>
      <li className={`relative flex mt-px sm:col-start-${dateCol}`} style={{ gridRow: `${fixedStart} / span ${span}` }}>
        <a href="#" className="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-blue-50 hover:bg-blue-100">
          <p className="order-1 font-semibold text-blue-700">{label}</p>
          <p className="text-blue-500 group-hover:text-blue-700"><time dateTime="2022-01-12T06:00">9:00 AM</time></p>
        </a>
      </li>
    </>
  );
}

export default AvailableBlock;
