import React, { useState } from 'react';

const IncomeDetails = ({ setWeeklyIncome, setPayPeriod, setActiveCard }) => {
  const [salary, setSalary] = useState(0);
  const [incomePayPeriod, setIncomePayPeriod] = useState('weekly');
  const [incomeType, setIncomeType] = useState('');

  const handleIncomeTypeCheck = (e) => {
    if (e.target.checked) {
      setIncomeType(e.target.value);
    } else {
      setIncomeType('');
    }
  };

  const handleCalculate = (e) => {
    let weeklyIncome;
    if (incomePayPeriod === 'weekly') {
      weeklyIncome = salary;
    } else if (incomePayPeriod === 'annually') {
      weeklyIncome = salary / 52;
    } else if (incomePayPeriod === 'monthly') {
      weeklyIncome = salary / 4;
    } else if (incomePayPeriod === 'fortnightly') {
      weeklyIncome = salary / 2;
    }

    e.preventDefault();
    setWeeklyIncome({ income: weeklyIncome, incomeType: incomeType });
    setPayPeriod(incomePayPeriod);
    setActiveCard('Your Income');
  };

  return (
    <div className="mt-16 mb-4 w-full flex flex-col justify-center items-center">
      <form onSubmit={(e) => handleCalculate(e)} className="mx-auto">
        <div className="mb-6">
          <p className="font-medium mb-3">What is your total income?</p>
          <div className="flex justify-between">
            <div>
              <div>
                <label htmlFor="income" className="hidden">
                  Income
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setSalary(e.target.value)}
                    type="number"
                    id="income"
                    min={1}
                    className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-blue-500 active:ring-blue-500 focus:border-blue-500 active:border-blue-500 block p-1 pl-5 mr-2 w-36"
                  />
                  <span className="absolute top-1 left-2 text-slate-400 font-normal">
                    $
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="pay-period" className="hidden">
                Pay periods
              </label>
              <select
                onChange={(e) => setIncomePayPeriod(e.target.value)}
                name="pay-period"
                id="pay-period"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-blue-500 active:ring-blue-500 focus:border-blue-500 active:border-blue-500 cursor-pointer p-1">
                <option value="weekly">weekly</option>
                <option value="fortnightly">fortnightly</option>
                <option value="monthly">monthly</option>
                <option value="annually">annually</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="font-medium mb-3">Choose the income type</p>
          <div className="flex w-full justify- text-sm text-white">
            <div
              className={
                incomeType === 'Gross income'
                  ? 'bg-darkBlue w-32 py-2 rounded relative text-center  mr-2 hover:drop-shadow-lg'
                  : 'bg-lightBlue w-32 py-2 rounded relative text-center mr-2 hover:drop-shadow-lg'
              }>
              <label htmlFor="gross">Gross income</label>
              <input
                id="gross"
                value="Gross income"
                type="checkbox"
                onChange={(e) => handleIncomeTypeCheck(e)}
                className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
                checked={incomeType === 'Gross income' ? true : false}
              />
            </div>

            <div
              className={
                incomeType === 'Net income'
                  ? 'bg-darkBlue w-32 py-2 rounded relative text-center ml-2 hover:drop-shadow-lg'
                  : 'bg-lightBlue w-32 py-2 rounded relative text-center ml-2 hover:drop-shadow-lg'
              }>
              <label htmlFor="net">Net income</label>
              <input
                id="net"
                value="Net income"
                type="checkbox"
                onChange={(e) => handleIncomeTypeCheck(e)}
                className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
                checked={incomeType === 'Net income' ? true : false}
              />
            </div>
          </div>
        </div>
      </form>

      <input
        type="submit"
        onClick={(e) => handleCalculate(e)}
        className="bg-green py-2 px-8 enabled:hover:px-10 easy-out duration-300 rounded text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        disabled={!incomeType || !salary ? true : false}
        value="Calculate"
      />
    </div>
  );
};

export default IncomeDetails;
