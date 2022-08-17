import React, { useState } from "react";
import AvailablePeriod from "./AvailablePeriod";
import CalendarHeader from "./CalendarHeader";

function CalendarBase() {
  let [availablePeriods, setAvailablePeriods] = useState([]);

  return (
    <div className="flex flex-col h-full">
      <CalendarHeader availablePeriods={availablePeriods} setAvailablePeriods={setAvailablePeriods} />
      <div className="flex flex-col flex-auto overflow-auto bg-white">
        <div
          style={{ width: "165%" }}
          className="flex flex-col flex-none max-w-full sm:max-w-none md:max-w-full"
        >
          <div className="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5">
            <div className="hidden grid-cols-5 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:grid">
              <div className="col-end-1 w-14"></div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Mon{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    15
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Tue{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    16
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span className="flex items-baseline">
                  Wed{" "}
                  <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    17
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Thu{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    18
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>
                  Fri{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    19
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
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5PM
                  </div>
                </div>
              </div>

              {/* <!-- Vertical lines --> */}
              <div className="hidden grid-cols-5 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5">
                <div className="col-start-1 row-span-full"></div>
                <div className="col-start-2 row-span-full"></div>
                <div className="col-start-3 row-span-full"></div>
                <div className="col-start-4 row-span-full"></div>
                <div className="col-start-5 row-span-full"></div>
              </div>

              {/* Events */}
              <ol
                className="grid grid-cols-1 col-start-1 col-end-2 row-start-1 sm:grid-cols-5"
                style={{
                  gridTemplateRows: `1.75rem repeat(8, minmax(0, 1fr)) auto`,
                }}
              >
                {availablePeriods?.map((block: { date: Date, label: string, start: number, end: number }) => (
                  <AvailablePeriod date={block.date} label={block.label} start={block.start} end={block.end} />
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
