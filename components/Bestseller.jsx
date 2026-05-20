import Image from "next/image";

const products = [
  {
    title: "Lippan Wall Frame",
    price: "₹ 2,800",
    img: "/images/bestsellar-frame.png",
  },
  {
    title: "Decorative Tray",
    price: "₹ 950",
    img: "/images/bestsellar-tray.png",
  },
  {
    title: "Jewellery Box",
    price: "₹ 1,450",
    img: "/images/bestsellar-box.png",
  },
  {
    title: "Copper Bell",
    price: "₹ 800",
    img: "/images/bestsellar-bell.png",
  },
];

export default function BestSeller() {
  return (
    <section className="best">
      <div className="best-header">
        <h2>Best Sellers</h2>
        <a href="#" className="view-all">View All</a>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <div className="product-image">
              <Image src={item.img} alt={item.title} fill className="img" />
            </div>

            <div className="product-footer">
              <h4>{item.title}</h4>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}