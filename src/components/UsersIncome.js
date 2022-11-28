import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFdoc from './PDF';

const UsersIncome = ({ weeklyIncome, payPeriod }) => {
  const payPeriods = ['weekly', 'fortnightly', 'monthly', 'annually'];
  const fortnightlyIncome = weeklyIncome.income * 2;
  const monthlyIncome = weeklyIncome.income * 4;
  const annuallyIncome = weeklyIncome.income * 52;

  const [activePayPeriod, setActivePayPeriod] = useState(payPeriod);

  const showIncome = () => {
    if (activePayPeriod === 'weekly') {
      const income =
        weeklyIncome.incomeType === 'Gross income'
          ? weeklyIncome.income * 0.7
          : weeklyIncome.income;
      return Math.round(income);
    } else if (activePayPeriod === 'fortnightly') {
      const income =
        weeklyIncome.incomeType === 'Gross income'
          ? weeklyIncome.income * 0.7 * 2
          : weeklyIncome.income * 2;
      return Math.round(income);
    } else if (activePayPeriod === 'monthly') {
      const income =
        weeklyIncome.incomeType === 'Gross income'
          ? weeklyIncome.income * 0.7 * 4
          : weeklyIncome.income * 4;
      return Math.round(income);
    } else if (activePayPeriod === 'annually') {
      const income =
        weeklyIncome.incomeType === 'Gross income'
          ? weeklyIncome.income * 0.7 * 52
          : weeklyIncome.income * 52;
      return Math.round(income);
    }
  };

  const getGrossIncome = (incomePeriod) => {
    const income =
      weeklyIncome.incomeType === 'Net income'
        ? incomePeriod * 1.3
        : incomePeriod;
    return Math.round(income);
  };

  const getTax = (incomePeriod) => {
    const tax =
      weeklyIncome.incomeType === 'Net income'
        ? incomePeriod * 1.3 - incomePeriod
        : incomePeriod * 0.3;
    return Math.round(tax);
  };

  const getNetIncome = (incomePeriod) => {
    const income =
      weeklyIncome.incomeType === 'Net income'
        ? incomePeriod
        : incomePeriod * 0.7;
    return Math.round(income);
  };

  if (!weeklyIncome.income) {
    return (
      <div className="w-full mt-12 h-72 mb-2">
        <div className="w-full h-full rounded flex justify-center items-center bg-lightGray font-semibold text-slate-500">
          <p>Please enter your income data first</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full mt-12 sm:h-72 mb-2">
      <PDFDownloadLink
        document={
          <PDFdoc
            weeklyIncome={weeklyIncome}
            fortnightlyIncome={fortnightlyIncome}
            monthlyIncome={monthlyIncome}
            annuallyIncome={annuallyIncome}
            getGrossIncome={getGrossIncome}
            getTax={getTax}
            getNetIncome={getNetIncome}
          />
        }
        fileName={'income-details'}
        className="absolute top-4 -left-4 sm:-left-9 px-4 py-1.5 hover:pl-6 easy-out duration-300 bg-orange-400 text-xs sm:text-sm text-white rounded-tr-lg rounded-br-lg">
        Download
      </PDFDownloadLink>
      <div>
        <p className="text-center font-semibold text-xs text-slate-400">
          Your net income
        </p>
        <p className="text-center mb-1.5 text-2xl font-semibold">
          ${showIncome()}
        </p>
        <div className="mb-4 text-center">
          {payPeriods.map((period) => (
            <button
              key={period}
              className={
                period === activePayPeriod
                  ? 'py-1 px-2 text-xs rounded-full mr-2 bg-white text-white bg-lightBlue drop-shadow hover:drop-shadow-md easy-out duration-200'
                  : 'py-1 px-2 text-xs rounded-full mr-2 bg-white drop-shadow hover:drop-shadow-md easy-out duration-200'
              }
              onClick={(e) => setActivePayPeriod(e.target.textContent)}>
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full bg-lightGray rounded-xl px-6 py-2 text-sm">
        <table className="w-full">
          <tbody className="h-48">
            <tr className="border-b-2">
              <th className="text-left">Frequency</th>
              <th className="text-left">Gross Income</th>
              <th className="text-left">Tax</th>
              <th className="text-left">Net Income</th>
            </tr>
            <tr className="border-b-2">
              <td>Weekly</td>
              <td>{getGrossIncome(weeklyIncome.income)}</td>
              <td>{getTax(weeklyIncome.income)}</td>
              <td>{getNetIncome(weeklyIncome.income)}</td>
            </tr>
            <tr className="border-b-2">
              <td>Fortnightly</td>
              <td>{getGrossIncome(fortnightlyIncome)}</td>
              <td>{getTax(fortnightlyIncome)}</td>
              <td>{getNetIncome(fortnightlyIncome)}</td>
            </tr>
            <tr className="border-b-2">
              <td>Monthly</td>
              <td>{getGrossIncome(monthlyIncome)}</td>
              <td>{getTax(monthlyIncome)}</td>
              <td>{getNetIncome(monthlyIncome)}</td>
            </tr>
            <tr>
              <td>Annually</td>
              <td>{getGrossIncome(annuallyIncome)}</td>
              <td>{getTax(annuallyIncome)}</td>
              <td>{getNetIncome(annuallyIncome)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersIncome;
