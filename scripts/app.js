import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          alt="Swiggy Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (res_details) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
        alt="restaurant-logo"
      />
      <h3>{res_details.res_name}</h3>
    </div>
  );
};
res_name = "KFC";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-cards-container">
        <RestaurantCard res_name={res_name} />
        <RestaurantCard res_name={res_name} />
        <RestaurantCard res_name={res_name} />
      </div>
    </div>
  );
};

const AppLevelLayout = () => {
  return (
    <div className="main-content">
      <Header />
      <Body />
      {/* <Footer />  */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLevelLayout />);
