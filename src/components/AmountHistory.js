import React, { useContext } from 'react';

import { Context } from '../context/ExpenseContext';

import '../App.css'

const AmountHistory =({ transection }) =>{

	const { deleteExpenseHandler } = useContext(Context);

	const sign = transection.amount > 0 ? '+': '-';

	return(
		<>

	     <li className='expense_list_style'>

		  <button className='del_history' onClick={()=>deleteExpenseHandler(transection.id)}>x</button>

	      <div className='history_box'>

	        <p className='history_name'>{transection.name}</p>
	        <p className='history_amount'>{sign} ${Math.abs(transection.amount)}</p>

	      </div>
		</li>

      </>
	)
}

export default AmountHistory;