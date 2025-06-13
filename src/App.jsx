import UserInput from "./components/userInput";
import Results from "./components/Results";
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeInput(value, identifier) {
    let val = value;
    if (val < 0) {
      val = 0;
    }
    setUserInput((oldInput) => {
      return {
        ...oldInput,
        [identifier]: val,
      };
    });
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <UserInput 
            labelName="Initial Investment"
            changeResults={(event) => handleChangeInput(event.target.value, 'initialInvestment')}
            input={userInput.initialInvestment}
          />
          <UserInput 
            labelName="Annual Investment"
            changeResults={(event) => handleChangeInput(event.target.value, 'annualInvestment')}
            input={userInput.annualInvestment}
          />
        </div>
        <div className="input-group">
          <UserInput 
            labelName="EXPECTED RETURN"
            changeResults={(event) => handleChangeInput(event.target.value, 'expectedReturn')}
            input={userInput.expectedReturn}
          />
          <UserInput 
            labelName="Duration"
            changeResults={(event) => handleChangeInput(event.target.value, 'duration')}
            input={userInput.duration}
          />
        </div>
      </div>
      <Results data={userInput}/>
    </>
    
  );
}

export default App
