import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('home');
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Classic Burger', price: 8 },
    { id: 2, name: 'Fries', price: 3 },
    { id: 3, name: 'Milkshake', price: 5 },
    { id: 4, name: 'Chicken Sandwich', price: 7 },
    { id: 5, name: 'Iced Tea', price: 2 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const renderPage = () => {
    switch (tab) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return (
          <MenuPage
            menuItems={menuItems}
            cart={cart}
            addToCart={addToCart}
            clearCart={clearCart}
            total={total}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('menu')}>Menu</button>
        <button onClick={() => setTab('contact')}>Contact</button>
      </nav>
      <div className="content">{renderPage()}</div>
    </div>
  );
}

// Subcomponents
const HomePage = () => (
  <div>
    <h2>🍔 Welcome to SmartOrder</h2>
    <p>Tap Menu to begin your order!</p>
  </div>
);

const MenuPage = ({ menuItems, cart, addToCart, clearCart, total }) => (
  <div>
    <h2>📋 Menu</h2>
    <ul className="menu">
      {menuItems.map((item) => (
        <li key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => addToCart(item)}>Add</button>
        </li>
      ))}
    </ul>
    <hr />
    <h3>🛒 Order Summary</h3>
    {cart.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      <div>
        <ul className="cart">
          {cart.map((item, idx) => (
            <li key={idx}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p><strong>Total: ${total}</strong></p>
        <button onClick={clearCart}>Clear Order</button>
      </div>
    )}
  </div>
);

const ContactPage = () => (
  <div>
    <h2>📞 Contact Us</h2>
    <p>Email: support@smartorder.com</p>
    <p>Instagram: @smartorderapp</p>
  </div>
);

export default App;
