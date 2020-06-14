import React, { useContext } from 'react';

import AmountHistory from './AmountHistory';

import { Context } from '../context/ExpenseContext';

const TransectionsList =() =>{

const { transections } = useContext(Context);


	return(
		<div className='transectionList'>
			<div className='transectionList_box'>

				<div className='transectionList_heading'>
					<h3>Payment Details</h3>
				</div>

				<p className='no_transection' >{transections.length < 1 ? 'No transection made yet!' : null}</p>


		        <ul >
		        	{transections.map(transection=> (
				  			<AmountHistory key={transection.id} transection={transection} />
					    ))
					}
		        </ul>

	        </div>
        </div>
	)
}

export default TransectionsList;