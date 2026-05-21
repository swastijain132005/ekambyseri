import { Search, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#eadfd6]/60 bg-[#f7f1ea]/90 backdrop-blur-md">
      
      {/* CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-[74px] sm:h-[84px]">
          
          {/* LOGO */}
          <div className="flex flex-col justify-center shrink-0">
            
            <h2
              style={{
                fontFamily:
                  'Georgia, Cambria, "Times New Roman", Times, serif',
              }}
              className="text-[18px] sm:text-[22px] font-semibold uppercase tracking-[0.12em] text-[#1b120d] leading-none"
            >
              Ekam by Seri
            </h2>

            <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.24em] text-[#9a7159] mt-1.5">
              Maati Leepan Products
            </p>
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {[
              "Home",
              "Collections",
              "About",
              "Craftsmanship",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2c1c13]/80 hover:text-[#b15e39] transition-all duration-300 group py-2"
                >
                  {item}

                  {/* UNDERLINE */}
                  <span className="absolute left-1/2 bottom-0 h-[1.5px] w-0 -translate-x-1/2 bg-[#b15e39] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* SEARCH */}
            <button
              aria-label="Search"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d8cd] bg-white/70 text-[#1d120c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-[#b15e39]/30 hover:shadow-sm"
            >
              <Search size={16} strokeWidth={1.8} />
            </button>

            {/* CART */}
            <button
              aria-label="Shopping Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#b15e39] text-white shadow-[0_10px_22px_rgba(177,94,57,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9d4f2d] hover:shadow-[0_12px_28px_rgba(177,94,57,0.25)]"
            >
              <ShoppingBag size={16} strokeWidth={1.8} />

              {/* COUNT */}
              <span className="absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#f7f1ea] bg-[#1d120c] text-[9px] font-bold text-white">
                2
              </span>
            </button>

            {/* MOBILE MENU */}
            <button
              aria-label="Menu"
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-[#e7d8cd] bg-white/70 text-[#1d120c] transition-all duration-300 hover:bg-white"
            >
              <Menu size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}