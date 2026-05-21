import Image from "next/image";
import { Leaf, HandHeart, Sparkles } from "lucide-react";

export default function InfoSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Soft Ambient Background Glow */}
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
        
        {/* ================= FIRST BLOCK ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          
          {/* IMAGE BLOCK (COLLAPSE BUG FIXED) */}
          <div
            className="
              group 
              relative 
              overflow-hidden 
              rounded-[28px] 
              border 
              border-[#eadfd6]/60
              shadow-[0_20px_45px_rgba(31,20,12,0.05)]
            "
            style={{
              height: 'clamp(320px, 45vw, 480px)',
              width: '100%',
            }}
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

            <Image
              src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/artisan-DEWkTXdH.jpg"
              alt="Artisan sculpting Maati Leepan art"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover 
                transition-transform 
                duration-[1200ms] 
                ease-out 
                group-hover:scale-[1.03]
              "
            />
            {/* Subtle Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* CONTENT COLUMN */}
          <div className="max-w-[620px]">
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
              What is Maati Leepan Art?
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, Cambria, serif',
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: '400',
                lineHeight: '1.2',
                color: '#1d120c',
                letterSpacing: '-0.01em',
                margin: '0 0 20px 0',
              }}
            >
              Ancient Earth,
              <br />
              Modern Expression
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#6d5a4d',
                margin: '0 0 32px 0',
              }}
            >
              Maati Leepan is a traditional clay plaster art made using
              clay, cow dung, natural gums and minerals. Each handcrafted
              piece reflects texture, warmth and the soulful simplicity
              of Indian craftsmanship.
            </p>

            {/* THREE COLUMN MICRO-FEATURES */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { 
                  icon: <Leaf size={18} strokeWidth={1.8} />, 
                  title: "Eco-Friendly", 
                  desc: "Natural materials with sustainable roots." 
                },
                { 
                  icon: <HandHeart size={18} strokeWidth={1.8} />, 
                  title: "Handmade", 
                  desc: "Crafted lovingly by skilled artisans." 
                },
                { 
                  icon: <Sparkles size={18} strokeWidth={1.8} />, 
                  title: "Timeless", 
                  desc: "Heritage reimagined for modern homes." 
                }
              ].map((feature, i) => (
                <div key={i}>
                  {/* Clean Icon Sockets */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      width: '42px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(177, 94, 57, 0.1)',
                      color: '#b15e39',
                      marginBottom: '14px',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1d120c', margin: '0 0 6px 0' }}>
                    {feature.title}
                  </h4>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#7a685b', margin: 0 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECOND BLOCK ================= */}
        <div 
          className="grid items-center gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-16"
          style={{ marginTop: '90px' }}
        >
          {/* CONTENT COLUMN */}
          <div className="order-2 max-w-[620px] lg:order-1">
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
              Heritage & Origins
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, Cambria, serif',
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: '400',
                lineHeight: '1.2',
                color: '#1d120c',
                letterSpacing: '-0.01em',
                margin: '0 0 20px 0',
              }}
            >
              Born in the
              <br />
              Heart of Kutch
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#6d5a4d',
                margin: '0 0 32px 0',
              }}
            >
              Rooted in the villages of Kutch, Gujarat, Maati Leepan
              was traditionally used to beautify mud homes. Passed
              through generations, this art carries stories of rural
              India, sustainability and soulful creativity.
            </p>

            {/* THREE COLUMN MICRO-FEATURES */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                { 
                  icon: <Leaf size={18} strokeWidth={1.8} />, 
                  title: "Kutch Roots", 
                  desc: "Inspired by Gujarat’s mud architecture." 
                },
                { 
                  icon: <HandHeart size={18} strokeWidth={1.8} />, 
                  title: "Generational", 
                  desc: "Preserved and passed through families." 
                },
                { 
                  icon: <Sparkles size={18} strokeWidth={1.8} />, 
                  title: "Soulful Art", 
                  desc: "Deeply connected to Indian tradition." 
                }
              ].map((feature, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '42px',
                      width: '42px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(177, 94, 57, 0.1)',
                      color: '#b15e39',
                      marginBottom: '14px',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1d120c', margin: '0 0 6px 0' }}>
                    {feature.title}
                  </h4>
                  <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#7a685b', margin: 0 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE BLOCK (COLLAPSE BUG FIXED) */}
          <div
            className="
              group 
              relative 
              order-1 
              overflow-hidden 
              rounded-[28px] 
              border 
              border-[#eadfd6]/60
              shadow-[0_20px_45px_rgba(31,20,12,0.05)]
              lg:order-2
            "
            style={{
              height: 'clamp(320px, 45vw, 480px)',
              width: '100%',
            }}
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

            <Image
              src="https://wire-to-web-magic.jainsanjna336.workers.dev/assets/kutch-8U3FCE2l.jpg"
              alt="Kutch mud house with Maati Leepan art"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover 
                transition-transform 
                duration-[1200ms] 
                ease-out 
                group-hover:scale-[1.03]
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ================= STORY BLOCK ================= */}
        <div 
          className="mx-auto text-center"
          style={{ marginTop: '100px', maxWidth: '950px' }}
        >
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
            Our Story
          </p>

          <h3
            style={{
              fontFamily: 'Georgia, Cambria, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: '400',
              lineHeight: '1.2',
              color: '#1d120c',
              letterSpacing: '-0.01em',
              margin: '0 auto 16px auto',
            }}
          >
            Rooted in Tradition,
            <br />
            Made with Love
          </h3>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#6d5a4d',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '16px',
            }}
          >
            Inspired by the traditional mud-and-mirror artistry of Kutch,
            EKAM BY SERI creates timeless handcrafted decor designed for
            soulful modern homes.
          </p>

          {/* STATS / CORE VALUES CARDS */}
          <div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{ marginTop: '56px' }}
          >
            {[
              {
                icon: <Leaf size={24} strokeWidth={1.8} />,
                title: "Handmade",
                desc: "Every piece is uniquely handcrafted in India."
              },
              {
                icon: <HandHeart size={24} strokeWidth={1.8} />,
                title: "Women Artisans",
                desc: "Supporting skilled rural women creators."
              },
              {
                icon: <Sparkles size={24} strokeWidth={1.8} />,
                title: "Sustainable",
                desc: "Crafted using natural and eco-conscious materials."
              }
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: '40px 32px',
                  borderRadius: '24px',
                  border: '1px solid rgba(234, 223, 214, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 30px rgba(31, 20, 12, 0.03)',
                  transition: 'all 0.3s ease',
                }}
                className="hover:-translate-y-1 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-xl"
              >
                {/* Centered Circle Icon Sockets */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '52px',
                    width: '52px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(177, 94, 57, 0.1)',
                    color: '#b15e39',
                    marginBottom: '20px',
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1d120c',
                    margin: '0 0 10px 0',
                  }}
                >
                  {card.title}
                </h4>

                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#7a685b',
                    margin: '0',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}