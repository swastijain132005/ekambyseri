export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Beautiful craftsmanship and premium quality. The Lippan mirror is now the centerpiece of our living room — every guest asks about it.",
      name: "Anjali Mehta",
      initials: "AM",
      location: "Mumbai",
      product: "Lippan Wall Frame",
    },
    {
      quote:
        "You can feel the tradition and care in every detail. Sustainable, soulful and stunning. Will order again.",
      name: "Ritika Sharma",
      initials: "RS",
      location: "Delhi",
      product: "Decorative Tray",
    },
    {
      quote:
        "EKAM by SERI brought a piece of Kutch into my home. The packaging and quality exceeded expectations.",
      name: "Pooja Desai",
      initials: "PD",
      location: "Bengaluru",
      product: "Jharokha Mirror",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <p className="section-label">CUSTOMER LOVE</p>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p>“{t.quote}”</p>

            <div className="testimonial-footer">
              <div className="testimonial-badge">{t.initials}</div>
              <div className="testimonial-meta">
                <h4>{t.name}</h4>
                <div className="muted">{t.location} • {t.product}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-follow">
        <p className="section-label">SOCIAL</p>
        <h3>Follow Us @ekambyseri</h3>
        <p className="testimonial-follow-copy">
          Stay updated with our latest handcrafted collections, behind-the-scenes stories, and exclusive offers.
        </p>
        <a className="secondary-btn" href="https://www.instagram.com/ekambyseri" target="_blank" rel="noreferrer">
          View More on Instagram
        </a>
      </div>
    </section>
  );
}