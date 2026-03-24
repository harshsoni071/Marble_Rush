import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "Above ₹5,000", min: 5000, max: Infinity },
  { label: "₹2,000 – ₹5,000", min: 2000, max: 5000 },
  { label: "Under ₹2,000", min: 0, max: 2000 },
];

export default function ProductGrid({ products, searchQuery }) {
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState(0);

  const filtered = useMemo(() => {
    const { min, max } = PRICE_RANGES[priceRange];

    let list = products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const price = parseInt(p.price.replace(/[₹,]/g, ""));
      const matchesPrice = price >= min && price < max;
      return matchesSearch && matchesPrice;
    });

    if (sortBy === "price-asc") {
      list = [...list].sort(
        (a, b) =>
          parseInt(a.price.replace(/[₹,]/g, "")) -
          parseInt(b.price.replace(/[₹,]/g, ""))
      );
    } else if (sortBy === "price-desc") {
      list = [...list].sort(
        (a, b) =>
          parseInt(b.price.replace(/[₹,]/g, "")) -
          parseInt(a.price.replace(/[₹,]/g, ""))
      );
    } else if (sortBy === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, searchQuery, sortBy, priceRange]);

  return (
    <section id="products" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            MarbleRush Collection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Premium Marble Run Toys
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto px-2">
            Build, play, and explore the best marble run sets. Handpicked Amazon
            deals for endless fun and creativity.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

            {/* Price Range Tabs — horizontally scrollable on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {PRICE_RANGES.map((range, idx) => (
                <button
                  key={range.label}
                  onClick={() => setPriceRange(idx)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 whitespace-nowrap ${
                    priceRange === idx
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                      : "bg-white text-gray-500 border-gray-200 hover:border-amber-400 hover:text-amber-700"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>

            {/* Divider — mobile only */}
            <div className="block sm:hidden h-px bg-gray-200" />

            {/* Bottom row on mobile: count left, sort right */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:flex-shrink-0">

              {/* Product count — mobile left, desktop separate */}
              <p className="text-xs text-gray-400 sm:hidden">
                <span className="font-semibold text-gray-600">{filtered.length}</span> products
              </p>

              {/* Sort dropdown */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Low to High</option>
                  <option value="price-desc">High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Result Count — desktop only */}
        <p className="hidden sm:block text-sm text-gray-400 mb-6">
          Showing <span className="font-semibold text-gray-600">{filtered.length}</span> products
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-2">
              No products found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try a different search term or price range.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${(i % 12) * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}