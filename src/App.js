import React from 'react';
import './assets/css/App.scss';
import Header from './components/Header';
import Wall from './components/Wall';


function App() {
  return (
    <div className="Container">
      <Header />
      <Wall />
    </div>
  );
}

export default App;
