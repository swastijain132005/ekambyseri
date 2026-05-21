import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Lippan Wall Frame",
    price: "₹ 2,800",
    img: "/images/bestsellar-frame.png",
    tag: "Best Seller",
  },
  {
    title: "Decorative Tray",
    price: "₹ 950",
    img: "/images/bestsellar-tray.png",
    tag: "Handcrafted",
  },
  {
    title: "Jewellery Box",
    price: "₹ 1,450",
    img: "/images/bestsellar-box.png",
    tag: "New Arrival",
  },
  {
    title: "Copper Bell",
    price: "₹ 800",
    img: "/images/bestsellar-bell.png",
    tag: "Artisan Made",
  },
];

export default function BestSeller() {
  return (
    <section 
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Soft Ambient Background Glow */}
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
        
        {/* HEADER & VIEW ALL BUTTON */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end', 
            gap: '24px',
            marginBottom: '56px' 
          }}
        >
          <div style={{ maxWidth: '640px' }}>
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
              Curated Favorites
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: 'clamp(2.3rem, 5vw, 3.85rem)',
                fontWeight: '400',
                lineHeight: '1.18',
                color: '#1d120c',
                letterSpacing: '-0.01em',
                margin: '0',
              }}
            >
              Best Sellers
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#6d5a4d',
                marginTop: '16px',
                marginBottom: '0',
              }}
            >
              A curated collection of handcrafted pieces loved for their warmth, texture and timeless artisan beauty.
            </p>
          </div>

          {/* Luxury Rounded View All Button */}
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid #e6d7cb',
              padding: '12px 28px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#1d120c',
              textDecoration: 'none',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease',
            }}
            className="hover:-translate-y-0.5 hover:bg-white hover:border-[#b15e39]/40 hover:shadow-sm"
          >
            View All
            <ArrowUpRight size={14} className="text-[#1d120c]/70" />
          </a>
        </div>

        {/* PRODUCT GRID */}
        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '24px',
                border: '1px solid rgba(234, 223, 214, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 10px 30px rgba(31, 20, 12, 0.03)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="group hover:-translate-y-1.5 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-[0_20px_45px_rgba(31,20,12,0.06)]"
            >
              
              {/* IMAGE FRAME */}
              <div className="relative overflow-hidden" style={{ width: '100%' }}>
                
                {/* Floating Glass tag */}
                <div
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    zIndex: 20,
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    padding: '6px 14px',
                    fontSize: '9px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#1d120c',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {item.tag}
                </div>

                {/* Shimmer overlay effect */}
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    translate-x-[-120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-[1200ms]
                    group-hover:translate-x-[120%]
                  "
                />

                {/* Aspect ratio frame ensures entire card matches screen heights */}
                <div className="relative" style={{ aspectRatio: '4/5', width: '100%' }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />
                </div>
              </div>

              {/* CARD DETAILED CONTENT */}
              <div 
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  flexGrow: 1 
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'Georgia, Cambria, serif',
                      fontSize: '20px',
                      fontWeight: '500',
                      color: '#1d120c',
                      margin: '0',
                      lineHeight: '1.25',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: '13px', 
                      lineHeight: '1.6', 
                      color: '#7a685b', 
                      marginTop: '8px',
                      marginBottom: '20px' 
                    }}
                  >
                    Handcrafted artisan decor for beautiful soulful interiors.
                  </p>
                </div>

                {/* BOTTOM PRICE & CART BAR (100% visible on screen) */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: '12px',
                    borderTop: '1px solid rgba(231, 216, 204, 0.5)',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: '#b15e39' 
                    }}
                  >
                    {item.price}
                  </div>

                  <button
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#1d120c',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '9999px',
                      fontSize: '10px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:bg-[#b15e39] hover:shadow-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}