import React, { useState } from 'react';
import './app.css';
import IncomeDetails from './components/IncomeDetails';
import UsersIncome from './components/UsersIncome';

const App = () => {
  const [activeCard, setActiveCard] = useState('Your Income');
  const [weeklyIncome, setWeeklyIncome] = useState({});
  const [payPeriod, setPayPeriod] = useState('weekly');

  return (
    <div className="relative w-1/2 h-auto m-auto my-24 px-9 py-5 bg-white rounded-lg drop-shadow-md relative">
      <div className="absolute -top-8 left-0">
        <button onClick={() => setActiveCard('Income Details')}>
          Income Details
        </button>
        <button onClick={() => setActiveCard('Your Income')}>
          Your Income
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 p-3 bg-lightGray">
        <h1>Income Tax Calculator</h1>
      </div>

      <div className="mx-auto flex justify-center">
        {activeCard === 'Income Details' ? (
          <IncomeDetails
            setWeeklyIncome={setWeeklyIncome}
            setPayPeriod={setPayPeriod}
            setActiveCard={setActiveCard}
          />
        ) : (
          <UsersIncome weeklyIncome={weeklyIncome} />
        )}
      </div>
    </div>
  );
};

export default App;
