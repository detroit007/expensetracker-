import React, { useContext } from 'react';

import { Context } from '../context/ExpenseContext';

const Balance =() =>{

	const { transections } = useContext(Context);

	const amounts = transections.map(transaction => transaction.amount);

	 const sum = amounts.reduce( (a,b) => (a += b),0);


	 const sign = sum > 0 ? ' ': '-';

	return(
		<div className='balance_box'>

        <h3>Balance</h3>
        <h2>{sign} ${Math.abs(sum)}</h2>

  		</div>
	)
}

export default Balance;