import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "Low (Under ₹2,000)", min: 0, max: 2000 },
  { label: "Medium (₹2,000 – ₹5,000)", min: 2000, max: 5000 },
  { label: "Premium (Above ₹5,000)", min: 5000, max: Infinity },
];

export default function ProductGrid({ products, searchQuery }) {
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState(0); // index of PRICE_RANGES

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
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-700 text-sm font-bold uppercase tracking-widest mb-3">
            MarbleRush Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Premium Marble Run Toys
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Build, play, and explore the best marble run sets. Handpicked Amazon
            deals for endless fun and creativity.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">

          {/* Price Range Tabs */}
          <div className="flex flex-wrap gap-2">
            {PRICE_RANGES.map((range, idx) => (
              <button
                key={range.label}
                onClick={() => setPriceRange(idx)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  priceRange === idx
                    ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-700"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Result Count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing <span className="font-semibold text-gray-600">{filtered.length}</span> products
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try a different search term or price range.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
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