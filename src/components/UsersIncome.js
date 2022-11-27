import React from 'react';

const UsersIncome = ({ weeklyIncome }) => {
  const fortnightlyIncome = weeklyIncome.income * 2;
  const monthlyIncome = weeklyIncome.income * 4;
  const annuallyIncome = weeklyIncome.income * 52;

  return (
    <div className="mt-12">
      <div>
        <p>Your net income</p>
        <p>
          $
          {weeklyIncome.incomeType === 'Gross income'
            ? weeklyIncome.income * 0.7
            : weeklyIncome.income}
        </p>
        <div>
          <button>weekly</button>
          <button>fortnightly</button>
          <button>monthly</button>
          <button>annually</button>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Frequency</th>
              <th>Gross Income</th>
              <th>Tax</th>
              <th>Net Income</th>
            </tr>
            <tr>
              <td>Weekly</td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? weeklyIncome.income * 1.3
                  : weeklyIncome.income}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? weeklyIncome.income * 1.3 - weeklyIncome.income
                  : weeklyIncome.income * 0.3}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? weeklyIncome.income
                  : weeklyIncome.income * 0.7}
              </td>
            </tr>
            <tr>
              <td>Fortnightly</td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? fortnightlyIncome * 1.3
                  : fortnightlyIncome}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? fortnightlyIncome * 1.3 - fortnightlyIncome
                  : fortnightlyIncome * 0.3}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? fortnightlyIncome
                  : fortnightlyIncome * 0.7}
              </td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? monthlyIncome * 1.3
                  : monthlyIncome}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? monthlyIncome * 1.3 - monthlyIncome
                  : monthlyIncome * 0.3}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? monthlyIncome
                  : monthlyIncome * 0.7}
              </td>
            </tr>
            <tr>
              <td>Annually</td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? annuallyIncome * 1.3
                  : annuallyIncome}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? annuallyIncome * 1.3 - annuallyIncome
                  : annuallyIncome * 0.3}
              </td>
              <td>
                {weeklyIncome.incomeType === 'Net income'
                  ? annuallyIncome
                  : annuallyIncome * 0.7}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersIncome;
