import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Celebrating the
          <br />
          Art of Handmade
        </h1>

        <p className="hero-sub">
          Handcrafted Maati Leepan decor blending tradition with modern
          interiors.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#collections">
            Explore Collection
          </a>
          <a className="secondary-btn" href="#contact">
            Custom Orders
          </a>
        </div>

        <ul className="hero-badges">
          <li>Handmade in India</li>
          <li>Women Artisan Support</li>
          <li>Sustainable Materials</li>
        </ul>
      </div>

      <div className="hero-image">
        <img
          src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/hero-DlRRQmST.jpg"
          alt="Handcrafted Maati Leepan jharokha mirror"
          className="img"
        />
      </div>
    </section>
  );
}