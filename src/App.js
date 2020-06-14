import React from 'react';
import './App.css';

import  Provider  from './context/ExpenseContext'
import HeadWithBalance from './screens/HeadWithBalance'
import Transection from './components/Transections';
import TransectionsList from './components/TransectionsList';




function App() {

  return (
    <Provider>
      <div className='main_container'>

        <HeadWithBalance />
        
        <TransectionsList />

        <Transection />

      </div>
    </Provider>
  );
}

export default App;
