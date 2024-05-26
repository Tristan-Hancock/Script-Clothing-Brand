import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClothingItems from './components/clothingitems';
import Footer from './components/Footer';
import FreeShipping from './components/FreeShipping';
import ImageSlider from './components/imageSlider';
import Review from './components/Review';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <FreeShipping />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <ImageSlider />
              <main style={{ flex: 1 }}>
                <ClothingItems />
              </main>
              <Review />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
