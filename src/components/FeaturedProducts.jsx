import { products } from "../products";

const featured = products.filter((p) => p.badge === "Best Seller" || p.badge === "Top Rated").slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-amber-700 text-sm font-bold uppercase tracking-widest block mb-2">
              Editor's Picks
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Featured Products
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden sm:flex items-center gap-2 text-amber-700 text-sm font-semibold hover:gap-3 transition-all"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-600/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-400"
              onClick={() => window.open(product.amazonLink, "_blank")}
            >
              <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black rounded-lg">
                ★ {product.badge}
              </div>

              <div className="overflow-hidden h-48 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-gray-900 font-bold text-sm line-clamp-2 mb-3 group-hover:text-amber-700 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-900 font-black">{product.price}</span>
                    <span className="text-amber-700 text-xs ml-2">★ {product.rating}</span>
                  </div>
                  <div className="w-8 h-8 bg-amber-600/10 border border-amber-600/30 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <svg className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
