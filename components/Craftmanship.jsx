export default function Craftsmanship() {

  const steps = [
    {
      number: "01",
      title: "Mud Preparation",
      description:
        "Finest quality clay is carefully prepared to achieve a smooth, durable and earthy texture.",
    },
    {
      number: "02",
      title: "Hand Sculpting",
      description:
        "Every form is handcrafted by skilled artisans using generations-old traditional techniques.",
    },
    {
      number: "03",
      title: "Mirror Placement",
      description:
        "Delicate mirror work is placed with precision to create rhythm, light and reflection.",
    },
    {
      number: "04",
      title: "Detailing",
      description:
        "Intricate patterns and textures are refined to preserve authenticity and elegance.",
    },
    {
      number: "05",
      title: "Finishing",
      description:
        "Final finishing touches ensure timeless beauty, durability and artisan perfection.",
    },
  ];

  return (
    <section
      id="craftsmanship"
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute left-[-120px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#b15e39]/5 blur-[120px] pointer-events-none" />

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
            Artisan Process
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
            Our Craftsmanship
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
            Rooted in tradition and shaped by skilled hands, every stage of our process transforms natural materials into soulful handcrafted decor pieces.
          </p>
        </div>

        {/* 
          HORIZONTAL TIMELINE SHOWCASE 
          Mobile: Horizontal touch scroll with snapping.
          Desktop: Clean 5-column single row.
        */}
        <div 
          className="relative z-10"
          style={{
            marginTop: '64px',
          }}
        >
          {/* Horizontal connecting line running behind the step circles on desktop */}
          <div 
            style={{ 
              position: 'absolute', 
              top: '28px', // Centered with the 56px number circles
              left: '80px', 
              right: '80px', 
              height: '1.5px', 
              backgroundColor: '#dbc8bb',
              opacity: 0.5,
              zIndex: 0
            }} 
            className="hidden lg:block pointer-events-none"
          />

          {/* 
            Scrollable flex container on mobile, snaps automatically to columns. 
            Scrollbar-none hides visual scrolls for a highly clean native aesthetic.
          */}
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-6 pb-6 lg:pb-0 scrollbar-none"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  flex: '0 0 280px', // Mobile card size
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '24px',
                  border: '1px solid rgba(234, 223, 214, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '32px 24px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 30px rgba(31, 20, 12, 0.03)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="group snap-center hover:-translate-y-1 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-[0_20px_45px_rgba(31, 20, 12, 0.06)] lg:flex-1"
              >
                
                {/* Step Circle Badge (z-10 sits perfectly over the line) */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    height: '56px',
                    width: '56px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '9999px',
                    border: '1px solid rgba(177, 94, 57, 0.25)',
                    backgroundColor: '#f5e6dc',
                    fontFamily: 'Georgia, Cambria, serif',
                    fontSize: '15px',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    color: '#b15e39',
                    marginBottom: '24px',
                    transition: 'all 0.3s ease',
                  }}
                  className="group-hover:scale-105 group-hover:bg-[#b15e39] group-hover:text-white group-hover:border-[#b15e39]"
                >
                  {step.number}
                </div>

                {/* Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3
                    style={{
                      fontFamily: 'Georgia, Cambria, serif',
                      fontSize: '19px',
                      fontWeight: '500',
                      color: '#1d120c',
                      margin: '0',
                      lineHeight: '1.25',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.65',
                      color: '#6d5a4d',
                      marginTop: '12px',
                      marginBottom: '0',
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Terracotta Expanding Border Marker */}
                  <div
                    style={{
                      marginTop: '20px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      height: '2px',
                      width: '0',
                      backgroundColor: '#b15e39',
                      transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="group-hover:w-[40px]"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* BRAND SIGNATURE SEAL */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Georgia, Cambria, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: '400',
              lineHeight: '1.3',
              color: '#b15e39',
              margin: 0,
            }}
          >
            "Every piece carries the warmth of human hands."
          </p>
        </div>

      </div>
    </section>
  );
}