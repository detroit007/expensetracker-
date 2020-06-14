import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';

export const Context = createContext();

const Provider = ({children})  =>{

	const initialState ={
		transections : []
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