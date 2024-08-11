import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/CheckoutPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { useState } from "react";
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  //add unidade no cart com produto modificado e verif se ele existe
  const addToCart = (productId) => {
    setCartItems({ ...cartItems, [productId]:(cartItems[productId] ?? 0) + 1,
     });
  };


  //tbm retira o t=item do carrinho
  const decreaseUnit = (productId) => {
    if(cartItems[productId] > 1) {
    setCartItems({
      ...cartItems,
      [productId]: cartItems[productId] - 1,
    });
    } 
    else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider value={{
      isCartOpen,
      toggleCartOpen,
      cartItems,
      addToCart,
      decreaseUnit,
      removeFromCart,
    }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/history' element={<PurchaseHistory />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
  );
}

//CartContext.Provider = garante q tds dentro dele vão ter acesso as inf do contexto
export default App
