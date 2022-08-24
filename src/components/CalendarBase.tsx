import React, { useState } from "react";
import AvailablePeriod from "./AvailablePeriod";
import CalendarHeader from "./CalendarHeader";

function CalendarBase() {
  let [availablePeriods, setAvailablePeriods] = useState([]);

  return (
    <div className="flex flex-col h-full">
      <CalendarHeader availablePeriods={availablePeriods} setAvailablePeriods={setAvailablePeriods} />
      <div className="flex flex-col flex-auto bg-white">
        <div
          style={{ width: "165%" }}
          className="flex flex-col flex-none max-w-full"
        >
          <div className="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-gray-500 ring-opacity-5">
            <div className="grid grid-cols-5 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100">
              <div className="col-end-1 w-14"></div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Mon{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    22
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Tue{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    23
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span className="flex items-baseline">
                  Wed{" "}
                  <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    24
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Thu{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    25
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Fri{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    26
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 flex-none bg-white w-14 ring-1 ring-gray-100"></div>
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* <!-- Horizontal lines --> */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
                style={{ gridTemplateRows: `repeat(8, minmax(5rem, 1fr))` }}
              >
                <div className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    9AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    10AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    11AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    12PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    1PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    2PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    3PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    4PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 pr-2 -mt-5 text-xs leading-5 text-right text-gray-400 -ml-14 w-14">
                    5PM
                  </div>
                </div>
              </div>

              {/* Timeslots */}
              <ol
                className="grid grid-cols-5 col-start-1 col-end-2 row-start-1"
                style={{
                  gridTemplateRows: `1.75rem repeat(8, minmax(0, 1fr)) auto`,
                }}
              >
                {availablePeriods?.map((block: { date: Date, start: number, end: number }) => (
                  <AvailablePeriod date={block.date} start={block.start} end={block.end} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarBase;
