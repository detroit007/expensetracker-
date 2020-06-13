import React from 'react';
import './App.css';

import  Provider  from './context/ExpenseContext'
import Header from './components/Header';
import Balance from './components/Balance';
import ExpenseDetails from './components/ExpenseDetails';
import AmountHistory from './components/AmountHistory';
import Transection from './components/Transections';
import TransectionsList from './components/TransectionsList';




function App() {

  return (
    <Provider>
      <div className='main_container'>

        <Header />

        <Balance />

        <ExpenseDetails />

        <TransectionsList />

        <Transection />

      </div>
    </Provider>
  );
}

export default App;
