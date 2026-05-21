import Image from "next/image";

// Fully standalone SVG Icons to ensure 100% build compatibility
function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Beautiful craftsmanship and premium quality. The Lippan mirror became the centerpiece of our living room — every guest asks about it.",
      name: "Anjali Mehta",
      initials: "AM",
      location: "Mumbai",
      product: "Lippan Wall Frame",
    },
    {
      quote:
        "You can truly feel the tradition and care in every detail. Sustainable, soulful and stunning in every way.",
      name: "Ritika Sharma",
      initials: "RS",
      location: "Delhi",
      product: "Decorative Tray",
    },
    {
      quote:
        "EKAM BY SERI brought a piece of Kutch into my home. The craftsmanship and packaging exceeded expectations.",
      name: "Pooja Desai",
      initials: "PD",
      location: "Bengaluru",
      product: "Jharokha Mirror",
    },
  ];

  const instagramPics = [
    { src: "/images/space1.png", alt: "Living Spaces" },
    { src: "/images/space2.png", alt: "Statement Corners" },
    { src: "/images/space3.png", alt: "Earthy Bedrooms" },
    { src: "/images/space4.png", alt: "Curated Dining" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#f7f1ea]"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      {/* Soft Ambient Background Glow */}
      <div className="absolute left-[-120px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#b15e39]/5 blur-[120px] pointer-events-none" />

      {/* Centered bounded container aligning perfectly with the page grid */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* HEADER */}
        <div className="relative z-10 mx-auto text-center" style={{ maxWidth: "800px" }}>
          <p
            className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#9a7159] font-semibold"
            style={{ margin: "0 0 16px 0" }}
          >
            Customer Love
          </p>

          <h2
            style={{
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: "600",
              color: "#1d120c",
              lineHeight: "1.15",
              letterSpacing: "normal",
              margin: "0",
            }}
          >
            What Our
            <br />
            Customers Say
          </h2>

          <p
            style={{
              color: "#6d5a4d",
              fontSize: "17px",
              lineHeight: "1.8",
              marginTop: "24px",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Thoughtful words from homes that now carry the warmth, texture, and
            timeless beauty of handcrafted Maati Leepan art.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ marginTop: "72px" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative border border-white/50 bg-white/75 shadow-[0_20px_50px_rgba(31,20,12,0.05)] hover:shadow-[0_30px_70px_rgba(31,20,12,0.09)] hover:border-white/80 hover:-translate-y-2 transition-all duration-300"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                borderRadius: "32px",
                padding: "44px 36px 36px 36px",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Decorative Quote Mark in Background */}
              <div
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "-5px",
                  fontFamily: "Georgia, Cambria, serif",
                  fontSize: "120px",
                  lineHeight: "1",
                  color: "#f4e5da",
                  opacity: "0.6",
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                ”
              </div>

              {/* Card Contents Wrapper */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                {/* Upper Body */}
                <div>
                  {/* Product Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      backgroundColor: "#f5e7dd",
                      color: "#b15e39",
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      padding: "6px 14px",
                      borderRadius: "99px",
                      lineHeight: "1",
                    }}
                  >
                    {t.product}
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontFamily: 'Georgia, Cambria, serif',
                      fontSize: "17px",
                      lineHeight: "1.8",
                      color: "#4e3f35",
                      marginTop: "28px",
                      marginRight: "10px",
                    }}
                  >
                    “{t.quote}”
                  </p>
                </div>

                {/* Lower Body */}
                <div>
                  {/* Divider Line */}
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "#ead9cd",
                      width: "100%",
                      margin: "32px 0 24px 0",
                    }}
                  />

                  {/* Card Footer Details */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {/* Circle Initials Avatar */}
                    <div
                      className="transition-all duration-300 group-hover:bg-[#b15e39] group-hover:text-white"
                      style={{
                        display: "flex",
                        height: "52px",
                        width: "52px",
                        minWidth: "52px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "#f4e5da",
                        fontFamily: 'Georgia, Cambria, serif',
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#b15e39",
                      }}
                    >
                      {t.initials}
                    </div>

                    {/* Meta Names */}
                    <div>
                      <h4
                        style={{
                          fontFamily: 'Georgia, Cambria, serif',
                          fontSize: "19px",
                          fontWeight: "600",
                          color: "#1d120c",
                          margin: "0",
                          lineHeight: "1.2",
                        }}
                      >
                        {t.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "#8a7465",
                          fontWeight: "500",
                          marginTop: "4px",
                          marginRight: "0",
                          marginBottom: "0",
                          marginLeft: "0",
                        }}
                      >
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SOCIAL / INSTAGRAM BLOCK */}
        <div
          className="relative z-10 border border-white/40 bg-gradient-to-br from-white/80 via-white/50 to-[#f5e5d8]/30 shadow-[0_35px_90px_rgba(31,20,12,0.06)]"
          style={{
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "120px",
            borderRadius: "40px",
            backdropFilter: "blur(20px)",
            padding: "72px 48px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Subtle Glow Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(245, 229, 216, 0.4), transparent, rgba(245, 229, 216, 0.4))",
            }}
          />

          <div className="relative z-10">
            <p
              className="text-[11px] uppercase tracking-[0.3em] text-[#9a7159] font-semibold"
              style={{ margin: "0 0 16px 0" }}
            >
              Social
            </p>

            <h3
              style={{
                fontFamily: 'Georgia, Cambria, serif',
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
                color: "#1d120c",
                lineHeight: "1.2",
                margin: "0",
              }}
            >
              Follow Our Journey
              <br />
              <span className="font-serif italic font-normal text-[#b15e39]">@ekambyseri</span>
            </h3>

            <p
              className="mx-auto"
              style={{
                color: "#6d5a4d",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "20px",
                maxWidth: "600px",
              }}
            >
              Discover new handcrafted collections, behind-the-scenes artisan
              stories, and timeless decor inspirations.
            </p>

            {/* ARTISAN INTERIOR INSTAGRAM GALLERY */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto mt-10 mb-4">
              {instagramPics.map((pic, idx) => (
                <div
                  key={idx}
                  className="group/insta relative aspect-square overflow-hidden rounded-[20px] border border-white/50 shadow-sm bg-white/40"
                  style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <Image
                    src={pic.src}
                    alt={pic.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover/insta:scale-[1.08]"
                  />
                  {/* Subtle glass overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/insta:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none"
                    style={{
                      backgroundImage: "linear-gradient(to top, rgba(177, 94, 57, 0.3), rgba(0,0,0,0.1))",
                    }}
                  >
                    <InstagramIcon
                      size={22}
                      className="text-white transform translate-y-3 group-hover/insta:translate-y-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="https://www.instagram.com/ekambyseri"
              target="_blank"
              rel="noreferrer"
              className="group/btn bg-[#b15e39] text-white shadow-[0_15px_35px_rgba(177, 94, 57, 0.25)] hover:bg-[#964b28] hover:shadow-[0_22px_45px_rgba(177,94,57,0.32)] hover:-translate-y-0.5 transition-all duration-300"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                textDecoration: "none",
                marginTop: "32px",
              }}
            >
              <span>View More on Instagram</span>
              <ArrowUpRightIcon
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* FINAL Brand Statement */}
        <div
          className="relative z-10 mx-auto text-center"
          style={{ marginTop: "120px" }}
        >
          <p
            style={{
              fontFamily: 'Georgia, Cambria, serif',
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: "400",
              fontStyle: "italic",
              lineHeight: "1.25",
              color: "#1d120c",
              margin: "0",
            }}
          >
            Crafted with soul,
            <br />
            cherished in every home.
          </p>

          {/* Artisan Clay Symmetrical Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "24px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#b15e39",
              }}
            />
            <span
              style={{
                width: "20px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: "#b15e39",
                opacity: 0.4,
              }}
            />
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#b15e39",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}