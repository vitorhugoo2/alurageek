import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <ProductSection 
                    title="Star Wars" 
                    viewAllLink="/categoria/star-wars"
                    products={[
                      {
                        id: 1,
                        name: "Action Figura Deadpool",
                        price: 299.90,
                        imageUrl: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 2,
                        name: "Boneco Baby Yoda",
                        price: 219.90,
                        imageUrl: "https://images.unsplash.com/photo-1613254026301-71fd1a7fd020?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 3,
                        name: "Sabre de Luz",
                        price: 449.90,
                        imageUrl: "https://images.unsplash.com/photo-1693290778871-fbdc0038c90c?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 4,
                        name: "Máscara Darth Vader",
                        price: 359.90,
                        imageUrl: "https://images.unsplash.com/photo-1586136194012-35ceaddbd773?auto=format&fit=crop&q=80&w=400"
                      }
                    ]}
                  />
                  <ProductSection 
                    title="Consoles" 
                    viewAllLink="/categoria/consoles"
                    products={[
                      {
                        id: 5,
                        name: "PlayStation 5",
                        price: 3999.90,
                        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 6,
                        name: "Controle Xbox",
                        price: 299.90,
                        imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 7,
                        name: "Nintendo Switch",
                        price: 2199.90,
                        imageUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        id: 8,
                        name: "Console Retrô",
                        price: 449.90,
                        imageUrl: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&q=80&w=400"
                      }
                    ]}
                  />
                </main>
              </>
            } />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;