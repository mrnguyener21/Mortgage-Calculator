import React, {useState} from 'react';
import {Balance, Chart, Interest, MonthlyPayment, Tax} from './components'

const App =() => {
  const[homeValue, setHomeValue] = useState('');
  const[downPayment, setDownPayment] = useState('');
  const[loanTerm, setLoanTerm] = useState('');
  const[interestRate, setInterestRate] = useState('');
  const[taxRate, setTaxRate] = useState('');

  
  return (
    <div>
      <div>
        <input type ={'text'} placeholder ={'Home Value'} value ={homeValue} onChange ={(e) => setHomeValue(e.target.value)}  />
        <input type ={'text'} placeholder ={'Down Payment'} value ={downPayment} onChange ={(e) => setDownPayment(e.target.value)}/>
        <input type ={'text'} placeholder ={'Loan Term'} value ={loanTerm} onChange ={(e) => setLoanTerm(e.target.value)}  />
        <input type ={'text'} placeholder ={'Interest Rate'} value ={interestRate} onChange ={(e) => setInterestRate(e.target.value)}/>
        <input type ={'text'} placeholder ={'Tax Rate'} value ={taxRate} onChange ={(e) => setTaxRate(e.target.value)}/>
      </div>
      <div>
        <input type ={'text'} placeholder={'Loan Amount'}/>
        <input type={'text'} placeholder={'Down Payment in $'}/>
        <MonthlyPayment/>
        <Tax taxrate={taxRate}/>
        <Interest interestRate={interestRate}/>
        <Balance/>// 
        <Chart/>
      </div>
    </div>
  )
}

export default App;
