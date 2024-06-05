import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClothingItems from './components/clothingitems';
import Footer from './components/Footer';
import FreeShipping from './components/FreeShipping';
import ImageSlider from './components/imageSlider';
import Review from './components/Review';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails
import Unavailable from './pages/Unavailable';
import ShopAll from './pages/ShopAll';  // Add this import
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
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Add this route */}
          <Route path="/all" element={<ShopAll />} />  {/* Add this route */}
          <Route path="/co-ord-sets" element={<Unavailable />} />
          <Route path="/shirts" element={<Unavailable />} />
          <Route path="/dresses" element={<Unavailable />} />
          <Route path="/shop-men" element={<Unavailable />} />
          <Route path="/about-us" element={<Unavailable />} />
          <Route path="/contact" element={<Unavailable />} />
          <Route path="/transaction" element={<Unavailable />} /> {/* Add this route */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
