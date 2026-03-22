export default function Hero({ onShopNow }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,114,128,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(107,114,128,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-full text-amber-700 text-sm font-semibold mb-6 animate-pulse">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              🔥 Limited Time Deals — Up to 70% Off
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Shop
              <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                Premium
              </span>
              Products
            </h1>

            <p className="text-gray-600 text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover the best deals on top-rated electronics, gadgets, and
              more. All products redirect directly to Amazon for a safe and
              secure purchase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onShopNow}
                className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black text-base rounded-2xl hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Explore Deals
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={onShopNow}
                className="px-8 py-4 bg-gray-200 border border-gray-300 text-gray-900 font-bold text-base rounded-2xl hover:bg-gray-100 hover:border-gray-400 transition-all"
              >
                View All Products
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { num: "40+", label: "Products" },
                { num: "4.5★", label: "Avg Rating" },
                { num: "100%", label: "Amazon Verified" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-gray-900">{stat.num}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            {[
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
            ].map((src, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden bg-gray-100 border border-gray-300 ${
                  i === 1 ? "mt-8" : ""
                } ${i === 3 ? "-mt-8" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <img
                  src={src}
                  alt="product"
                  className="w-full h-44 object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-3 rounded-2xl font-black text-sm shadow-2xl shadow-amber-600/30">
              🛒 Buy on Amazon
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-600 text-xs">Scroll to explore</span>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
