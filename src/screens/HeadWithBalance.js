import React from 'react';

import Header from '../components/Header';
import Balance from '../components/Balance';
import ExpenseDetails from '../components/ExpenseDetails';




const HeadWithBalance =() =>{

  return (
      <div className='headWithBalance'>

        <Header />

        <Balance />

        <ExpenseDetails />

      </div>
  );
}

export default HeadWithBalance;
