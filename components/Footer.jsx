// components/Footer.jsx

import {
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* LEFT */}
        <div className="footer-newsletter">
          <h2>
            Stay
            <br />
            Updated
          </h2>

          <p>
            Subscribe to get special offers, new
            <br />
            arrivals and more.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Email address"
            />

            <button>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h4>Shop</h4>

          <a href="#">Wall Decor</a>
          <a href="#">Frames</a>
          <a href="#">Jharokha</a>
        </div>

        {/* GIFT */}
        <div className="footer-column">
          <h4>Gift Decor</h4>

          <a href="#">Our Story</a>
          <a href="#">Our Journey</a>
        </div>

        {/* ABOUT */}
        <div className="footer-column">
          <h4>About Us</h4>

          <a href="#">Craftsmanship</a>
          <a href="#">Custom Orders</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-column">
          <h4>Support</h4>

          <a href="#">Shipping & Returns</a>
          <a href="#">Custom Orders</a>

          <h4 className="track-title">
            Track Site
          </h4>

          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <Phone size={16} />
          <span>+91 12345-67890</span>
        </div>

        <div className="footer-bottom-item">
          <MapPin size={16} />
          <span>Jaipur, Rajasthan, India</span>
        </div>

        <div className="footer-bottom-item">
          <span>© 2026 EKAM by SERI</span>
        </div>
      </div>
    </footer>
  );
}