// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FreeShipping from './components/FreeShipping';
import ImageSlider from './components/imageSlider';
import Review from './components/Review';
import ProductDetails from './components/ProductDetails';
import Unavailable from './pages/Unavailable';
import ShopAll from './pages/ShopAll';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/ProductSearchFilter/CartContext';
import ProductSearchFilter from './components/ProductSearchFilter/ProductSearchFilter';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <FreeShipping />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <ImageSlider />
                <main style={{ flex: 1 }}>
                  <ProductSearchFilter />
                </main>
                <Review />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/all" element={<ShopAll />} />
            <Route path="/co-ord-sets" element={<Unavailable />} />
            <Route path="/shirts" element={<Unavailable />} />
            <Route path="/dresses" element={<Unavailable />} />
            <Route path="/shop-men" element={<Unavailable />} />
            <Route path="/about-us" element={<Unavailable />} />
            <Route path="/contact" element={<Unavailable />} />
            <Route path="/transaction" element={<Unavailable />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
