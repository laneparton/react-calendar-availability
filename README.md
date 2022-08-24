## How To Access This Project:

1. [Visit the live demo](https://react-calendar-availability.vercel.app/)
2. Build it locally:
   1. git clone
   2. yarn build/yarn start

## What I might do next:

1. Optimize the "end" select input to auto-adjust based on the "start" value.
2. Add basic testing with @testing-library/react.
3. Make the app responsive.
4. Make the week dynamically generated (so it always shows the current week).

## Prompt

Using React, create a single page website that will allow users to create a schedule of their calendar availability for a given week.
The user should be able to customize their availability for each day of the week.
By default the availability should be weekdays only from 9am to 5 pm. The availability should be stored as an array of objects called available periods. The start and end times only need to be hourly (we don't need things like 2:30 pm or 11:45 am).

An available period will consist of a day of the week, a start time and end time.
Each day can have multiple available periods, or no availability.

For example I could have availability on Monday from 10am-1pm and 2pm to 5pm.
my available periods would be:
{day: 'Monday', start: '10', end: '13'} and {day: 'Monday', start: '14', end: '17'}

Your project should include the following:
A section to set availability.
A section that displays the current availability.
A button to print out the availability objects as JSON to the console.
A README describing how to access your project

The page should look nice and show off your ability to style and use React.
