import Image from "next/image";

const data = [
  { name: "Wall Decor", img: "/images/collection-wall.png" },
  { name: "Frames", img: "/images/collection-frame.png" },
  { name: "Trays", img: "/images/collection-tray.png" },
  { name: "Jharokha", img: "/images/collection-jharokha.png" },
  { name: "Copper Bells", img: "/images/collection-bells.png" },
];

export default function Collections() {
  return (
    <section id="collections" className="collections">
      <h2>Shop by Collection</h2>

      <div className="collection-grid">
        {data.map((item, i) => (
          <a href="#" className="collection-card" key={i}>
            <div className="collection-img">
              <Image src={item.img} alt={item.name} fill className="img" />
              <span className="collection-name">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}