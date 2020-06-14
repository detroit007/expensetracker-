import React, { useContext } from 'react';

import { Context } from '../context/ExpenseContext';

import '../App.css'

const AmountHistory =({ transection }) =>{

	const { deleteExpenseHandler } = useContext(Context);

	const sign = transection.amount > 0 ? '+': '-';

	const clr = transection.amount > 0 ? 'plus' : 'negative';

	return(
		<>

	     <li className='expense_list_style'>
	     <div>
			  <button className='del_history' onClick={()=>deleteExpenseHandler(transection.id)}>x</button>

		      <div className='history_box'>

		        <p className='history_name'>{transection.name}</p>
		        <p className='history_amount'><span className={clr}>{sign} ${Math.abs(transection.amount).toFixed(2)}</span></p>

		      </div>
	      </div>
		</li>

      </>
	)
}

export default AmountHistory;