# Prompt
Hi Lane,

You’ve advanced to the next step in our hiring process. Please complete the React Coding Project, and submit your completed project and/or questions to dev@revboss.com.

React Coding Project

Using React, create a single page website that will allow users to create a schedule of their calendar availability for a given week.      
The user should be able to customize their availability for each day of the week.  
By default the availability should be weekdays only from 9am to 5 pm.  The availability should be stored as an array of objects called available periods.  The start and end times only need to be hourly (we don't need things like 2:30 pm or 11:45 am). 

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

Send your finished project and/or any questions to dev@revboss.com.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
