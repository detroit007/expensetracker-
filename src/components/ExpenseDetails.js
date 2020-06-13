import React, { useContext } from 'react';

import { Context } from '../context/ExpenseContext';

const ExpenseDetails =() =>{

	const { transections } = useContext(Context);

	const amounts = transections.map(transaction => transaction.amount);

	const saving = amounts.filter(item => item > 0 )
							.reduce( (a,b) => (a+=b), 0 )
							.toFixed(2);

	const expense = amounts.filter(item => item < 0 )
							.reduce( (a,b) => (a+=b), 0 )
							.toFixed(2);

	return(
		<div className='expense_details'>



	        <div className='saving'>
	            <h3>work</h3>
	            <h2>${saving}</h2>
	        </div>

	        <div className='expense'>

	            <h3>Expense</h3>
	            <h2>${Math.abs(expense)}</h2>

	        </div>

      </div>
	)
}

export default ExpenseDetails;