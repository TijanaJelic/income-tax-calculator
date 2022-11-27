import React, { useState } from 'react';

const IncomeDetails = ({ setWeeklyIncome, setPayPeriod, setActiveCard }) => {
  const [salary, setSalary] = useState(0);
  const [incomePayPeriod, setIncomePayPeriod] = useState('weekly');
  const [incomeType, setIncomeType] = useState('');

  const handleCalculate = () => {
    let weeklyIncome;
    if (incomePayPeriod === 'weekly') {
      weeklyIncome = salary;
    } else if (incomePayPeriod === 'yearly') {
      weeklyIncome = salary / 52;
    } else if (incomePayPeriod === 'monthly') {
      weeklyIncome = salary / 4;
    } else if (incomePayPeriod === 'fortnightly') {
      weeklyIncome = salary / 2;
    }

    setWeeklyIncome({ income: weeklyIncome, incomeType: incomeType });
    setPayPeriod(incomePayPeriod);
    setActiveCard('Your Income');
  };

  return (
    <div className="mt-12">
      <div>
        <p>What is your total income?</p>
        <div className="flex">
          <div>
            <label htmlFor="income" className="hidden">
              Income
            </label>
            <input
              onChange={(e) => setSalary(e.target.value)}
              type="number"
              id="income"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 mr-2"
            />
          </div>
          <div>
            <label htmlFor="pay-period" className="hidden">
              Pay periods
            </label>
            <select
              onChange={(e) => setIncomePayPeriod(e.target.value)}
              name="pay-period"
              id="pay-period"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
              <option value="weekly">weekly</option>
              <option value="fortnightly">fortnightly</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <p>Choose the income type</p>
        <div>
          <button onClick={(e) => setIncomeType(e.target.textContent)}>
            Gross income
          </button>
          <button onClick={(e) => setIncomeType(e.target.textContent)}>
            Net income
          </button>
        </div>
      </div>
      <button
        className="bg-green py-2 px-8"
        onClick={handleCalculate}
        disabled={!incomeType ? true : false}>
        Calculate
      </button>
    </div>
  );
};

export default IncomeDetails;
