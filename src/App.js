import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Collection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
