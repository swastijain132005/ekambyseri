import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>EKAM BY SERI</h2>
        <p>MAATI LEEPAN PRODUCTS</p>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#craftsmanship">Craftsmanship</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}