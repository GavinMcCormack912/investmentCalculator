export default function Results({ data }) {
  function displayData(investmentData) {
    let rows = [];
    let totalInterest = 0;
    let currentInvestment = Number(investmentData.initialInvestment);
    let yearInterest = 0;
    for (let i = 0; i < Number(investmentData.duration); i++) {
      yearInterest = Math.floor(currentInvestment * Number(investmentData.expectedReturn) / 100);
      totalInterest += yearInterest;
      currentInvestment += (yearInterest + Number(investmentData.annualInvestment));
      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>${currentInvestment}</td>
          <td>${yearInterest}</td>
          <td>${totalInterest}</td>
          <td>${Number(investmentData.annualInvestment) * (i + 1)}</td>
        </tr>
      );
    }

    return <tbody>{rows}</tbody>;
  }

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {displayData(data)}
      </table>
    </div>
  );
}
