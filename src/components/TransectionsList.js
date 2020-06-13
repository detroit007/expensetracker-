import React, { useContext, useState } from 'react';

import AmountHistory from './AmountHistory';

import { Context } from '../context/ExpenseContext';

import EXPENSE from '../models/expense';

const TransectionsList =() =>{

	const context = useContext(Context);

const [ inputName, setInputName] = useState('');

const [ amount, setAmount] = useState('');

const { transections, deleteExpenseHandler } = useContext(Context);

	return(
		<div className='transectionList_box'>

			<h3>history</h3>
	        <hr/>

	        <ul >
	        	{transections.map(transection=> (
			  			<AmountHistory key={transection.id} transection={transection} />
				    ))
				}
	        </ul>

        </div>
	)
}

export default TransectionsList;