export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Interactive Background Ambient Studio Lighting */}
      <div className="absolute left-[8%] top-[12%] h-[400px] w-[400px] rounded-full bg-[#b15e39]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[#e6d7cb]/25 blur-[100px] pointer-events-none" />

      {/* Grid container perfectly restricted to 1200px width alignment */}
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
        <div
          className="
            relative 
            z-10 
            grid 
            items-center 
            gap-12 
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* LEFT PANEL */}
          <div className="max-w-[620px]">
            
            {/* Category Tag */}
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
              Maati Leepan Decor
            </p>

            {/* 
              Responsive Georgia Serif heading. 
              The 'clamp' ensures typography dynamically fits mobile screens 
              without wrapping into clustered, unreadable vertical shapes.
            */}
            <h1
              style={{
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: 'clamp(2.3rem, 5vw, 3.85rem)',
                fontWeight: '400',
                lineHeight: '1.15',
                color: '#1d120c',
                letterSpacing: '-0.01em',
                margin: '0 0 24px 0',
              }}
            >
              Celebrating
              <br />
              the Art of
              <br />
              <span style={{ fontStyle: 'italic', color: '#b15e39' }}>Handmade</span>
            </h1>

            {/* Paragraph Body Text */}
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#6d5a4d',
                maxWidth: '480px',
                margin: '0 0 32px 0',
              }}
            >
              Handcrafted Maati Leepan decor blending timeless Indian
              artistry with modern interiors and soulful living spaces.
            </p>

            {/* Bounded, Bypassed Buttons Container */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '16px', 
                alignItems: 'center',
                margin: '0 0 40px 0'
              }}
            >
              <a
                href="#collections"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#b15e39',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(177, 94, 57, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                className="hover:-translate-y-0.5 hover:bg-[#9d4f2d] hover:shadow-[0_14px_30px_rgba(177,94,57,0.3)]"
              >
                Explore Collection
              </a>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  color: '#1d120c',
                  border: '1px solid #e6d7cb',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                }}
                className="hover:-translate-y-0.5 hover:bg-white hover:border-[#b15e39]/40 hover:shadow-[0_10px_20px_rgba(29,18,12,0.04)]"
              >
                Custom Orders
              </a>
            </div>

            {/* Bounded, Bypassed Badges Grid Separator */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px', 
                borderTop: '1px solid rgba(231, 216, 204, 0.6)', 
                paddingTop: '24px' 
              }}
            >
              {[
                "Handmade in India",
                "Women Artisan Support",
                "Sustainable Materials",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    border: '1px solid rgba(231, 216, 204, 0.8)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '10px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#6d5a4d',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:border-[#b15e39]/20 hover:bg-white/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MEDIA DISPLAY */}
          <div className="relative">
            
            {/* Soft Dotted Rotating Background Accent */}
            <div
              className="
                absolute 
                -bottom-8 
                -left-8 
                h-[200px] 
                w-[200px] 
                rounded-full 
                border 
                border-dashed 
                border-[#e8d9ce] 
                opacity-50 
                animate-[spin_45s_linear_infinite] 
                pointer-events-none
              "
            />

            {/* Interactive Image Frame */}
            <div
              className="
                group 
                relative 
                overflow-hidden 
                rounded-[32px] 
                border 
                border-[#e8d9ce]/60 
                bg-[#f4ebe1] 
                shadow-[0_24px_55px_rgba(29,18,12,0.06)] 
                transition-all 
                duration-700
              "
            >
              {/* Shimmer light reflect on hover */}
              <div
                className="
                  absolute 
                  inset-0 
                  z-10 
                  translate-x-[-100%] 
                  bg-gradient-to-r 
                  from-transparent 
                  via-white/20 
                  to-transparent 
                  transition-transform 
                  duration-[1200ms] 
                  group-hover:translate-x-[100%]
                "
              />

              <img
                src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/hero-DlRRQmST.jpg"
                alt="Handcrafted Maati Leepan mirror art piece"
                className="
                  h-[520px] 
                  sm:h-[580px] 
                  lg:h-[640px] 
                  w-full 
                  object-cover 
                  transition-transform 
                  duration-[1200ms] 
                  ease-out 
                  group-hover:scale-[1.03]
                "
              />

              {/* Floating Gallery Label Card (Perfect spacing, prevents overlapping) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 15px 35px rgba(29, 18, 12, 0.08)',
                  transition: 'all 0.3s ease',
                }}
                className="sm:right-auto sm:min-w-[200px] group-hover:translate-y-[-4px] group-hover:shadow-xl"
              >
                <span 
                  style={{ 
                    display: 'block',
                    fontSize: '9px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.2em', 
                    color: '#b15e39',
                    lineHeight: '1',
                    marginBottom: '6px'
                  }}
                >
                  Artisan Crafted
                </span>
                <h3
                  style={{
                    fontFamily: 'Georgia, Cambria, serif',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#1d120c',
                    margin: 0,
                    lineHeight: '1.2',
                  }}
                >
                  Timeless Decor
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}