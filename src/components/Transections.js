import React, { useContext, useState } from 'react';

import { Context } from '../context/ExpenseContext';

const Transection =() =>{

	const { addExpenseHandler } = useContext(Context);

const [ inputName, setInputName] = useState('');
const [check, setCheck] = useState(false);
const [errText, setErrText] = useState('');

const [ amount, setAmount] = useState('');

	const transection = {
		id: Math.floor(Math.random()* 999999),
		name: inputName,
		amount: +amount,
	};

	const onSubmit = (transection) =>{


		if(inputName === ''){
			setCheck(true);
			setErrText('Enter some title first!')
		}else if(amount === ''){
			setCheck(true);
			setErrText('Enter some amount!')
		} else{
			setCheck(false);
			addExpenseHandler(transection);
	          		setInputName('');
	          		setAmount('');
		}
	}

	return(
		<div className='transection_container'>
			<div className='transection_box'>

		        <div className='transectionList_heading'>
					<h3>Add Transection</h3>
				</div>

		        	{ check ?  <p className='errText'>{errText}</p> : null }


			        <input 
			          	className='name' 
			          	placeholder='Enter title'
			          	value={inputName}
			          	onChange={e=>{setInputName(e.target.value)}}
		          	/>


		          	<input 
			          	className='amount' 
			          	placeholder='Enter amount'
			          	value={amount}
			          	onChange={e=>{setAmount(e.target.value)}}
		          	/>

		          	<div className='btn_box'>
			          <button className='btn' onClick={()=> onSubmit(transection)}
			          >
			          	Add button
			          </button>
		          </div>

	        </div>
        </div>
	)
}

export default Transection;