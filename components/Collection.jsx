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
    <section
      id="collections"
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Ambient Lighting Glow */}
      <div className="absolute right-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#b15e39]/5 blur-[120px] pointer-events-none" />

      {/* Centered bounded grid aligner matching the Navbar/Hero layout */}
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
        
        {/* HEADER SECTION */}
        <div className="relative z-10 text-center">
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
            Curated Collections
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
              fontSize: 'clamp(2.3rem, 5vw, 3.85rem)',
              fontWeight: '400',
              lineHeight: '1.15',
              color: '#1d120c',
              letterSpacing: '-0.01em',
              margin: '0 auto 16px auto',
            }}
          >
            Shop by Collection
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
            Thoughtfully handcrafted decor collections inspired by traditional Maati Leepan artistry and modern living spaces.
          </p>
        </div>

        {/* 5-COLUMN CARD GRID */}
        <div 
          className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          style={{
            marginTop: '56px',
          }}
        >
          {data.map((item, i) => (
            <a
              href="#"
              key={i}
              style={{
                display: 'block',
                overflow: 'hidden',
                borderRadius: '24px',
                border: '1px solid rgba(234, 223, 214, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none',
                boxShadow: '0 15px 35px rgba(31, 20, 12, 0.04)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="group hover:-translate-y-1.5 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-[0_22px_45px_rgba(31,20,12,0.08)]"
            >
              
              {/* Responsive aspect ratio image wrapper */}
              <div 
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4 / 5',
                  width: '100%',
                }}
              >
                {/* Shine Hover Effect */}
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

                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Bottom Info Content (100% visible and beautifully spaced) */}
              <div 
                style={{ 
                  padding: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, Cambria, serif',
                      fontSize: '18px',
                      fontWeight: '500',
                      color: '#1d120c',
                      margin: '0',
                      lineHeight: '1.2'
                    }}
                  >
                    {item.name}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: '11px', 
                      color: '#7b6658', 
                      margin: '4px 0 0 0',
                      lineHeight: '1.3'
                    }}
                  >
                    Explore pieces
                  </p>
                </div>

                {/* Elegant Rounded Arrow */}
                <div
                  style={{
                    display: 'flex',
                    height: '32px',
                    width: '32px',
                    minWidth: '32px',
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

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}