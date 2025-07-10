// Lab 3: Import React and useState hook for managing state
import React, { useState } from 'react';
import './App.css'; // Lab 1: Import CSS for styling

function App() {
  // Lab 3: State to manage current tab and shopping cart contents
  const [tab, setTab] = useState('home');
  const [cart, setCart] = useState([]);

  // Lab 2: Simulated menu data (could later be fetched via API)
  const menuItems = [
    { id: 1, name: 'Classic Burger', price: 8 },
    { id: 2, name: 'Fries', price: 3 },
    { id: 3, name: 'Milkshake', price: 5 },
    { id: 4, name: 'Chicken Sandwich', price: 7 },
    { id: 5, name: 'Iced Tea', price: 2 },
  ];

  // Lab 3: Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Lab 3: Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Lab 3: Calculate total cart price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Lab 2: Render different tabs in a single-page application (SPA)
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
      {/* Lab 1: Navigation styling, Lab 2: Tab switching */}
      <nav className="navbar">
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('menu')}>Menu</button>
        <button onClick={() => setTab('contact')}>Contact</button>
      </nav>
      {/* Lab 2: Display selected tab content */}
      <div className="content">{renderPage()}</div>
    </div>
  );
}

// Lab 1: Home tab - static component
const HomePage = () => (
  <div>
    <h2>🍔 Welcome to SmartOrder</h2>
    <p>Tap Menu to begin your order!</p>
  </div>
);

// Lab 2 + 3: Menu tab - dynamic item listing and cart management
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

// Lab 1: Contact tab - static component
const ContactPage = () => (
  <div>
    <h2>📞 Contact Us</h2>
    <p>Email: support@smartorder.com</p>
    <p>Instagram: @smartorderapp</p>
  </div>
);

export default App;
