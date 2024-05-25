import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClothingItems from './components/clothingitems';
import Footer from './components/Footer';
import FreeShipping from './components/FreeShipping'; // Adjust the path as needed
import ImageSlider from './components/imageSlider';
import Review from './components/Review';
function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <FreeShipping />
      <Navbar />
      <ImageSlider />
      <main style={{ flex: 1 }}>
       <ClothingItems /> 
      </main>
      <Review />

      <Footer />
    </div>
  );
}

export default App;
