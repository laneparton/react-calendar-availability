import React from 'react';
import CalendarBase from './components/CalendarBase'
import './App.css';

function App() {
  return (
    <div className="container mx-auto my-12 mb-24">
      <h1 className="mb-3 text-4xl text-center">Weekly Availability</h1>
      <p className="mb-4 text-center">Schedule of your calendar availability for a given week.</p>
      <CalendarBase />
    </div>
  );
}

export default App;
