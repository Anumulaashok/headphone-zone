import React, { useState, useEffect } from 'react'; // Import hooks

const Navbar: React.FC = () => {
  // State for dynamic elements
  const [userName, setUserName] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  // Effect to load data from localStorage on mount
  useEffect(() => {
    // Load User Name
    try {
      const storedUser = localStorage.getItem('userCredentials');
      if (storedUser) {
        const users = JSON.parse(storedUser);
        // Check if it's an array and has users
        if (Array.isArray(users) && users.length > 0) {
          const lastUser = users[users.length - 1];
          // Check if the user object has the required properties
          if (lastUser && lastUser.first_name && lastUser.last_name) {
            setUserName(`${lastUser.first_name} ${lastUser.last_name}`);
          }
        }
      }
    } catch (e) {
      console.error("Failed to parse userCredentials from localStorage", e);
      // Optional: Clear corrupted data? localStorage.removeItem('userCredentials');
    }

    // Load Cart Count
    try {
      const storedCart = localStorage.getItem('cartdata');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        if (Array.isArray(cartItems)) {
          setCartCount(cartItems.length);
        }
      }
    } catch (e) {
      console.error("Failed to parse cartdata from localStorage", e);
      // Optional: Clear corrupted data? localStorage.removeItem('cartdata');
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // TODO: Implement dropdown logic and search functionality later
  return (
    <nav id="navbars">
      <div id="nav">
        <div id="nav_c1">
          <a href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Animated-Header_400x_b56ee274-b480-4d0f-91ae-4a16d148a93f.gif?v=1580537719"
              alt="Headphone Zone Logo" />
          </a>
        </div>
        <div id="nav_c2">
           {/* Categories, Brands, Price, Deals, Info - Static for now */}
          <div className="ref">Categories
            <div className="dropdowns">
              <div><h4>BEGINNER</h4><p><a href="/earphones">Earphones</a></p><p><a href="/earphones">Headphones</a></p><p>portable Amp/DACS</p><p>Desktop Amp/DACS</p><p>Hi Res Players</p></div>
              <div><h4>FLAGSHIP</h4><p>New Arrivals</p><p>Earphones</p><p>Headphones</p><p>Portable Amp/DACS</p><p>Desktop Amps/DACS</p><p>Hi Res-Players</p></div>
              <div><h4>COLLECTIONS</h4><p>Work From Home</p><p>Gaming</p><p>Studio $ Professional</p></div>
              <div><h4>WIRELESS</h4><p>True Wireless Earbuds</p><p>Wireless Headphones</p><p>Wireless Earphones</p></div>
              <div><h4>ACCESSORIES</h4><p>Eartips</p><p>Earpads</p><p>Cases</p><p>Cables</p><p>Headphone Stands</p><p>Digital Cables</p><p>Interconnects</p></div>
            </div>
          </div>
          <div className="ref">Brands
            <div className="dropdowns">
              <div><p>1Custom</p><p>64 Audio</p><p>Abyss</p></div>
              <div><p>Bowers & Wilkins</p><p>BQEYZ</p></div>
              <div><p>EarMen</p><p>Edifier</p></div>
              <div><p>HEDD Audio</p><p>HiBy</p></div>
              <div><p>Loto</p><p>Lypertek</p></div>
              <div><p>Schiit</p><p>Sennheiser</p></div>
              <div><p>TIN HiFi</p><p>Topping</p></div>
            </div>
          </div>
          <div className="ref">Price
            <div className="dropdowns sss" id="Change"><p>Best Headphones Under Rs. 1,000</p><p>Best Headphones Under Rs. 2,000</p><p>Best Headphones Under Rs. 3,000</p><p>Best Headphones Under Rs. 5,000</p><p>Best Headphones Under Rs. 10,000</p><p>Best Headphones Under Rs. 20,000</p><p>Best Headphones Under Rs. 30,000</p></div>
          </div>
          <div className="ref">Deals
            <div className="dropdowns sss"><p>Unboxed</p><p>Pre-Owned</p><p>Clearance</p><p>Demo Unit</p><p>Deals of the Month</p></div>
          </div>
          <div>Headphone Finder</div>
          <div>Events</div>
          <div className="ref">Info
            <div className="dropdowns">
              <div className="infoimgs"><img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-10-Years_500x-1_295x.jpg?v=1643031208" alt="" /><h4>10 YEARS OF HEADPHONE ZONE</h4><p>Read the Headphone Zone journey since 2011 as told by Raghav.</p></div>
              <div className="infoimgs" id="infoimgss"><img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Club-Audiophile-Menu_500x-focal_256x256_c41abc2b-75a9-4aeb-b2cf-4f01ae7c1992_256x.webp?v=1650019007" alt="" /><h4>IT PAYS TO BE AN AUDIOPHILE</h4><p>Enjoy Members-only rewards with our loyalty program</p></div>
              <div><h4>ABOUT US</h4><p>Our Story</p><p>Our Values</p><p>Meet the Team</p><p>Customer Testimonials</p><p>Careers - We're Hiring!</p><p>Brands That Inspire Us</p></div>
              <div><h4>GET IN TOUCH</h4><p>Contact the Team</p><p>Corporate Gifting</p><p>Partner With Us</p></div>
              <div><h4>COMMUNITY</h4><p>Headphone Zone Merchandise</p><p>Trade-Up Program</p></div>
            </div>
          </div>
          <div>Help Center</div>
        </div>
        <div id="nav_c3">
          <div id="searchs">Search
            <div> {/* Search panel content */}
              <div id="searchDivs"><i className="fa-solid fa-magnifying-glass"></i><input type="text" id="searchBars" placeholder="What are you looking for?" /><i className="fa-solid fa-circle-xmark"></i></div>
              <div id="noResults"><p>No results could be found.</p><button>NEW SEARCH</button></div>
            </div>
          </div>
          {/* Dynamic Login Status */}
          <div id="account">
            {userName ? (
              <span>{userName}</span> // Display user name if logged in
            ) : (
              <a href="/login">Login</a> // Display login link if not logged in
            )}
          </div>
           {/* Dynamic Cart Count */}
          <div>
            <a href="/cart">Cart</a>
            <div id="added_items">{cartCount}</div> {/* Display dynamic cart count */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
