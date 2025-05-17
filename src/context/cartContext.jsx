import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
const [hasLoaded, setHasLoaded] = useState(false);
  // تحميل السلة من localStorage عند التحميل الأولي
useEffect(() => {
  const savedCart = localStorage.getItem("trainingCart");
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
  setHasLoaded(true);
}, []);

  // حفظ السلة في localStorage عند التغيير
useEffect(() => {
  if (hasLoaded) {
    localStorage.setItem("trainingCart", JSON.stringify(cart));
  }
}, [cart, hasLoaded]);

  const addToCart = (course) => {
    setCart(prev => [...prev, course]);
  };

  const removeFromCart = (courseId) => {
    setCart(prev => prev.filter(item => item.id !== courseId));
  };

  const isInCart = (courseId) => {
    return cart.some(item => item.id === courseId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        isInCart, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);