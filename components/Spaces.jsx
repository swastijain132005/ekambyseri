import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    img: "/images/space1.png",
    title: "Living Spaces",
    desc: "Warm handcrafted accents designed for soulful modern interiors.",
  },
  {
    img: "/images/space2.png",
    title: "Statement Corners",
    desc: "Textured artisan pieces that transform quiet corners beautifully.",
  },
  {
    img: "/images/space3.png",
    title: "Earthy Bedrooms",
    desc: "Natural handcrafted decor bringing softness and calm to spaces.",
  },
  {
    img: "/images/space4.png",
    title: "Curated Dining",
    desc: "Thoughtfully crafted pieces elevating everyday gatherings.",
  },
];

export default function Spaces() {
  return (
    <section 
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute right-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#b15e39]/5 blur-[120px] pointer-events-none" />

      {/* Centered bounded container aligning perfectly with the page grid */}
      <div 
        style={{
          maxWidth: '1200px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        
        {/* SECTION HEADER */}
        <div className="relative z-10 text-center" style={{ marginBottom: '64px' }}>
          <p
            style={{
              fontSize: '10px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: '#9a7159',
              margin: '0 0 16px 0',
            }}
          >
            Inspired Interiors
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
              fontSize: 'clamp(2.3rem, 5vw, 3.85rem)',
              fontWeight: '400',
              lineHeight: '1.18',
              color: '#1d120c',
              letterSpacing: '-0.01em',
              margin: '0 auto 16px auto',
            }}
          >
            Made for Your Spaces
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.75',
              color: '#6d5a4d',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '16px',
            }}
          >
            Designed to blend beautifully into modern homes while preserving the warmth and soul of traditional Indian craftsmanship.
          </p>
        </div>

        {/* FEATURED INTERIORS GRID */}
        <div className="relative z-10 grid gap-6 lg:grid-cols-12">
          
          {/* LEFT LARGE FEATURE CARD (STABLE RESPONSIVE HEIGHT CLAMP) */}
          <div
            className="
              group 
              relative 
              overflow-hidden 
              rounded-[28px] 
              border 
              border-[#eadfd6]/60
              shadow-[0_20px_45px_rgba(31,20,12,0.05)]
              lg:col-span-7
            "
            style={{
              height: 'clamp(380px, 45vw, 540px)',
              width: '100%',
            }}
          >
            {/* Hover light sweep shimmer */}
            <div
              className="
                absolute 
                inset-0 
                z-20 
                translate-x-[-100%] 
                bg-gradient-to-r 
                from-transparent 
                via-white/20 
                to-transparent 
                transition-transform 
                duration-[1500ms] 
                group-hover:translate-x-[100%]
              "
            />

            {/* Stable Absolute Image Wrapper */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={images[0].img}
                alt={images[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="
                  object-cover 
                  transition-transform 
                  duration-[1200ms] 
                  ease-out 
                  group-hover:scale-[1.03]
                "
              />
              {/* Soft Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Fully visible card overlay text */}
            <div 
              style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                zIndex: 30,
                padding: 'clamp(20px, 4vw, 40px)' 
              }}
            >
              <p style={{ fontSize: '9px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.7)', margin: '0 0 8px 0' }}>
                Featured Space
              </p>

              <h3
                style={{
                  fontFamily: 'Georgia, Cambria, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  fontWeight: '400',
                  lineHeight: '1.2',
                  color: '#ffffff',
                  margin: '0',
                }}
              >
                {images[0].title}
              </h3>

              <p 
                style={{ 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'rgba(255,255,255,0.8)', 
                  marginTop: '12px',
                  marginBottom: '0',
                  maxWidth: '440px' 
                }}
              >
                {images[0].desc}
              </p>

              {/* Glass CTA Button */}
              <button
                style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '10px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#1d120c',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                className="hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
              >
                Explore Space
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE STACK (STABLE CAPPED HEIGHT LAYOUT) */}
          <div className="grid gap-6 lg:col-span-5">
            {images.slice(1).map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '24px',
                  border: '1px solid rgba(234, 223, 214, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 30px rgba(31, 20, 12, 0.03)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden'
                }}
                className="group hover:-translate-y-1 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-[0_20px_45px_rgba(31, 20, 12, 0.06)]"
              >
                {/* Horizontal grid layout ensures perfect aspect for images */}
                <div className="grid md:grid-cols-[180px_1fr]" style={{ minHeight: '200px' }}>
                  
                  {/* Stable Image Block */}
                  <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="
                        object-cover 
                        transition-transform 
                        duration-[1200ms] 
                        ease-out 
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>

                  {/* Stable Card Info Block */}
                  <div 
                    style={{ 
                      padding: '24px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '9px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9a7159', margin: '0 0 6px 0' }}>
                        Curated Interior
                      </p>

                      <h3
                        style={{
                          fontFamily: 'Georgia, Cambria, serif',
                          fontSize: '18px',
                          fontWeight: '500',
                          color: '#1d120c',
                          margin: '0',
                          lineHeight: '1.25',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#6d5a4d', marginTop: '10px', marginBottom: '0' }}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Arrow Indicator */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        marginTop: '20px',
                      }}
                    >
                      <div style={{ height: '1px', width: '50px', backgroundColor: '#d9c7ba', opacity: 0.6 }} />

                      <div
                        style={{
                          display: 'flex',
                          height: '32px',
                          width: '32px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '9999px',
                          backgroundColor: '#f5e7dd',
                          color: '#b15e39',
                          fontSize: '12px',
                          transition: 'all 0.3s ease',
                        }}
                        className="group-hover:bg-[#b15e39] group-hover:text-white group-hover:scale-105"
                      >
                        →
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT SEAL */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Georgia, Cambria, serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
              fontWeight: '400',
              lineHeight: '1.35',
              color: '#1d120c',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Crafted to feel timeless,
            <br />
            <span style={{ fontStyle: 'italic', color: '#b15e39' }}>warm and deeply personal.</span>
          </p>
        </div>

      </div>
    </section>
  );
}