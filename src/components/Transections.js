import React, { useContext, useState } from 'react';

import { Context } from '../context/ExpenseContext';

import EXPENSE from '../models/expense';

const Transection =() =>{

	const { addExpenseHandler } = useContext(Context);

const [ inputName, setInputName] = useState('');

const [ amount, setAmount] = useState('');

	const transection = {
		id: Math.floor(Math.random()* 999999),
		name: inputName,
		amount: +amount,
	};

	return(
		<div className='transection_box'>

	        <h2>Transections</h2>
	        <hr/>

	        	<p>Add Name</p>
		        <input 
		          	className='name' 
		          	placeholder='add name'
		          	value={inputName}
		          	onChange={e=>{setInputName(e.target.value)}}
	          	/>

          		<p>Add Amount</p>

	          	<input 
		          	className='amount' 
		          	placeholder='add amount'
		          	value={amount}
		          	onChange={e=>{setAmount(e.target.value)}}
	          	/>

	          <button className='btn' onClick={()=>{
	          		addExpenseHandler(transection);
	          		setInputName('');
	          		setAmount('');
          		}}
	          >
	          	Add button
	          </button>

        </div>
	)
}

export default Transection;