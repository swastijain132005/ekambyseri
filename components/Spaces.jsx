import Image from "next/image";

const images = [
  "/images/space1.png",
  "/images/space2.png",
  "/images/space3.png",
  "/images/space4.png",
];

export default function Spaces() {
  return (
    <section className="spaces">
      <h2>Made for Your Spaces</h2>

      <div className="spaces-grid">
        {images.map((img, i) => (
          <div className="space-card" key={i}>
            <Image src={img} alt="" fill className="img" />
          </div>
        ))}
      </div>
    </section>
  );
}