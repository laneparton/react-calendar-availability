import React from "react";
import moment from 'moment';

type AvailablePeriodProps = {
  date: Date,
  start: number,
  end: number
};

function AvailablePeriod({ date, start, end}: AvailablePeriodProps) {
  let dateTime = moment(date);
  dateTime.hour(start);

  const dateCol = dateTime.day();
  let span = end - start;
  let fixedStart = start - 7;

  return (
    <>
      <li className={`relative flex mt-px`} style={{ gridColumn: `${dateCol} / span 1`, gridRow: `${fixedStart} / span ${span}` }}>
        <a href="#" className="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-blue-50 hover:bg-blue-100">
          <p className="text-blue-500 group-hover:text-blue-700"><time dateTime={dateTime.format()}>{dateTime.format('LT')}</time></p>
        </a>
      </li>
    </>
  );
}

export default AvailablePeriod;
