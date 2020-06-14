import React, { useContext } from 'react';

import { Context } from '../context/ExpenseContext';

const Balance =() =>{

	const { transections } = useContext(Context);

	const amounts = transections.map(transaction => transaction.amount);

	 const sum = amounts.reduce( (a,b) => (a += b),0);


	 const sign = sum >= 0 ? ' ': '-';

	 const clr = sum >= 0 ? 'plus' : 'negative';

	return(
		<div className='balance_box'>

	        
	        <h2><span className={clr}>{sign} ${Math.abs(sum).toFixed(2)}</span></h2>
	        <p>Account Balance</p>

  		</div>
	)
}

export default Balance;