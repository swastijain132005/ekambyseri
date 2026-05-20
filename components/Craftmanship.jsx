export default function Craftsmanship() {
  const steps = [
    {
      title: "Mud Preparation",
      description:
        "Finest quality clay carefully prepared for a smooth and durable finish.",
    },
    {
      title: "Hand Sculpting",
      description:
        "Each piece is handcrafted by skilled artisans using traditional techniques.",
    },
    {
      title: "Mirror Placement",
      description:
        "Intricate mirror work is placed with precision to elevate the design.",
    },
    {
      title: "Detailing",
      description:
        "Patterns and textures are refined to create a rich, authentic finish.",
    },
    {
      title: "Finishing",
      description:
        "Final touches are added for a perfect polished look and lasting appeal.",
    },
  ];

  return (
    <section id="craftsmanship" className="craft">
      <div className="craft-header">
        <h2>Our Craftsmanship</h2>
        <p>
          Rooted in tradition and shaped by skilled hands, every step in our
          process brings artful Maati Leepan pieces to life.
        </p>
      </div>

      <div className="craft-grid">
        {steps.map((step, i) => (
          <div key={i} className="craft-card">
            <div className="craft-number">0{i + 1}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}