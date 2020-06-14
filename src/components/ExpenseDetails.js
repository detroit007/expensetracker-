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

	        	<div className='saving_img' >
	            	
	            	<h3>Income</h3>

		            <img src='https://cdn0.iconfinder.com/data/icons/startup-blue-style/64/income-512.png'
		            	alt='' 
		            	width="40" height="39"
	            	/>

	            </div>

	            <h2>${saving}</h2>

	        </div>

	        <div className='expense'>

	        	<div className='expense_img' >

	            	<h3>Expense</h3>

	            	<img src='https://www.flaticon.com/premium-icon/icons/svg/2258/2258264.svg'
	            		alt=''
						width="40" height="39"
	            	/>

            	</div>

	            <h2>${Math.abs(expense).toFixed(2)}</h2>

	        </div>

      </div>
	)
}

export default ExpenseDetails;