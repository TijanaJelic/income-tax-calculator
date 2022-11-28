import React, { useState } from 'react';
import IncomeDetails from './components/IncomeDetails';
import UsersIncome from './components/UsersIncome';
import './app.css';

const App = () => {
  const [activeCard, setActiveCard] = useState('Income Details');
  const [weeklyIncome, setWeeklyIncome] = useState({});
  const [payPeriod, setPayPeriod] = useState('weekly');

  return (
    <div className="relative w-11/12 max-w-xl max-h-xl h-auto m-auto my-24 px-4 py-2 sm:px-9 sm:py-5 bg-white rounded-lg drop-shadow-md relative body-font font-poppins">
      <div className="absolute -top-10 left-0 font-medium">
        <button
          onClick={() => setActiveCard('Income Details')}
          className={
            activeCard === 'Income Details'
              ? 'bg-lightGray py-3 px-3 rounded-t'
              : 'bg-mediumGray py-2 px-3 rounded-t'
          }>
          Income Details
        </button>
        <button
          onClick={() => setActiveCard('Your Income')}
          className={
            activeCard === 'Your Income'
              ? 'bg-lightGray py-3 px-3 rounded-t'
              : 'bg-mediumGray py-2 px-3 rounded-t'
          }>
          Your Income
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 p-3 bg-lightGray">
        <h1 className="font-semibold text-center text-lg">
          Income Tax Calculator
        </h1>
      </div>

      <div className="h-full">
        {activeCard === 'Income Details' ? (
          <IncomeDetails
            setWeeklyIncome={setWeeklyIncome}
            setPayPeriod={setPayPeriod}
            setActiveCard={setActiveCard}
          />
        ) : (
          <UsersIncome weeklyIncome={weeklyIncome} payPeriod={payPeriod} />
        )}
      </div>
    </div>
  );
};

export default App;
