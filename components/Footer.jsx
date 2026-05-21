export default function Footer() {
  return (
    <footer className="bg-[#A84F24] text-[#F7EFE7]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-24">

        {/* Top Section: Newsletter + Nav Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">

          {/* Newsletter Column - Left */}
          <div className="lg:col-span-1">
            <h3 className="text-4xl md:text-5xl font-serif italic leading-tight mb-6 text-[#F7EFE7]">
              Stay<br />Updated
            </h3>

            <p className="text-sm leading-relaxed text-[#F7EFE7]/70 mb-8">
              Subscribe to receive new arrivals, artisan stories and exclusive collections from Rajasthan.
            </p>

            {/* Email Input */}
            <div className="flex border border-[#F7EFE7]/20 hover:border-[#F7EFE7]/40 transition-colors">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-3.5 text-sm placeholder:text-[#F7EFE7]/40 focus:outline-none text-[#F7EFE7]"
              />
              <button className="px-6 bg-[#F7EFE7]/10 hover:bg-[#EFE4D8] text-[#F7EFE7] hover:text-[#A84F24] transition-all duration-300 text-lg">
                →
              </button>
            </div>
          </div>

          {/* Navigation Grid - Right */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {/* Shop */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7EFE7]/50 mb-6">
                Shop
              </h4>
              <ul className="space-y-3">
                {["Wall Decor", "Frames", "Jharokha"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#F7EFE7]/70 hover:text-[#F7EFE7] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gift Decor */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7EFE7]/50 mb-6">
                Gift Decor
              </h4>
              <ul className="space-y-3">
                {["Our Story", "Our Journey"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#F7EFE7]/70 hover:text-[#F7EFE7] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7EFE7]/50 mb-6">
                About Us
              </h4>
              <ul className="space-y-3">
                {["Craftsmanship", "Custom Orders"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#F7EFE7]/70 hover:text-[#F7EFE7] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7EFE7]/50 mb-6">
                Support
              </h4>
              <ul className="space-y-3">
                {["Shipping & Returns", "Terms & Conditions", "Privacy Policy"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#F7EFE7]/70 hover:text-[#F7EFE7] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#F7EFE7]/15 mb-8" />

        {/* Bottom Section: Contact + Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a href="tel:+911234567890" className="text-xs text-[#F7EFE7]/60 hover:text-[#F7EFE7] transition-colors">
              ☎ +91 12345-67890
            </a>
            <div className="text-xs text-[#F7EFE7]/60">
              📍 Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#F7EFE7]/50 tracking-wider">
            © 2026 EKAM by SERI
          </p>
        </div>
      </div>
    </footer>
  );
}
