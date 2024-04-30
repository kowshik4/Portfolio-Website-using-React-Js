import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';

const App = () => {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
};

export default App
