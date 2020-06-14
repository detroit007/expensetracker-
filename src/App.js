import React from 'react';
import './App.css';

import  Provider  from './context/ExpenseContext'
import HeadWithBalance from './screens/HeadWithBalance'
import Transection from './components/Transections';
import TransectionsList from './components/TransectionsList';
import Footer from './components/Footer';




function App() {

  return (
    <Provider>
      <div className='main_container'>

        <HeadWithBalance />
        
        <TransectionsList />

        <Transection />

        <Footer />

      </div>
    </Provider>
  );
}

export default App;
