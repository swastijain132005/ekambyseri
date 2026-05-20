import Image from "next/image";
import { Leaf, HandHeart, Sparkles } from "lucide-react";

export default function InfoSection() {
  return (
    <section id="about" className="info-section">
      <div className="info-row bg-cream">
        <div className="info-image">
          <Image
            src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/artisan-DEWkTXdH.jpg"
            alt="Artisan sculpting Maati Leepan art"
            fill
            className="img"
          />
        </div>

        <div className="info-copy">
          <p className="info-eyebrow">What is Maati Leepan Art?</p>
          <p className="info-copy-text">
            Maati Leepan is a traditional clay plaster art made using a mixture
            of clay, cow dung, natural gums and minerals. Artisans handcraft
            intricate designs and patterns, creating beautiful, textured and
            eco-friendly decor pieces.
          </p>

          <div className="info-feature-list">
            <div className="info-feature">
              <Leaf className="info-feature-icon" />
              <span>Natural & Eco-friendly</span>
            </div>
            <div className="info-feature">
              <HandHeart className="info-feature-icon" />
              <span>Handcrafted with Love</span>
            </div>
            <div className="info-feature">
              <Sparkles className="info-feature-icon" />
              <span>Traditional Technique</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-row bg-cream reverse">
        <div className="info-image">
          <Image
            src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/kutch-8U3FCE2l.jpg"
            alt="Kutch mud house with Maati Leepan art"
            fill
            className="img"
          />
        </div>

        <div className="info-copy">
          <p className="info-eyebrow">Where did this Art come from?</p>
          <p className="info-copy-text">
            Rooted in the heart of Kutch, Gujarat, Maati Leepan is an age-old art
            form traditionally used to beautify mud homes. Passed down through
            generations, it reflects the simplicity, sustainability and soulful
            creativity of rural India.
          </p>

          <div className="info-feature-list">
            <div className="info-feature">
              <Leaf className="info-feature-icon" />
              <span>Origin: Kutch, Gujarat</span>
            </div>
            <div className="info-feature">
              <HandHeart className="info-feature-icon" />
              <span>Generational Heritage</span>
            </div>
            <div className="info-feature">
              <Sparkles className="info-feature-icon" />
              <span>Indian Roots, Timeless Art</span>
            </div>
          </div>
        </div>
      </div>

      <div className="info-row bg-cream text-only">
        <div className="info-copy">
          <p className="info-eyebrow">Our Story</p>
          <h3 className="info-title">Rooted in Tradition, Made with Love</h3>
          <p className="info-copy-text">
            Inspired by the traditional mud-and-mirror artistry of Kutch, EKAM BY
            SERI creates timeless decor pieces for beautiful homes.
          </p>

          <div className="info-feature-list">
            <div className="info-feature">
              <Leaf className="info-feature-icon" />
              <span>Handmade in India</span>
            </div>
            <div className="info-feature">
              <HandHeart className="info-feature-icon" />
              <span>Women Artisan Support</span>
            </div>
            <div className="info-feature">
              <Sparkles className="info-feature-icon" />
              <span>Sustainable Materials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
