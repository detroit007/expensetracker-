import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';

import EXPENSE from '../models/expense';

export const Context = createContext();

const Provider = ({children})  =>{

	const initialState ={
		transections : [
			{id: '456', name: 'work', amount: 400},
			{id: '457', name: 'office', amount: 50},
			{id: '458', name: 'bike', amount: -20}
		],
	}

	const [state, dispatch ]= useReducer(ExpenseReducer, initialState);

	const addExpenseHandler = (transection) =>{
		dispatch({type: 'ADD_TRANSACTION', payload: transection})
	}

	const deleteExpenseHandler = (id) =>{
		dispatch({type: 'DELETE_TRANSACTION', payload: id})
	}


	return(
		<Context.Provider  value={{transections: state.transections, 
									addExpenseHandler,
									deleteExpenseHandler,
								}}>
			{children}
		</Context.Provider>
	)
}

export default Provider;