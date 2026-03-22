import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, searchQuery }) {
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
  }, [products, searchQuery, sortBy]);

  const visible = filtered.slice(0, visibleCount);

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

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-gray-900 text-xl font-bold mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try a different search term.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {visible.map((product, i) => (
                <div
                  key={product.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${(i % 12) * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < filtered.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((v) => v + 8)}
                  className="px-10 py-4 bg-gray-100 border border-gray-300 text-gray-900 font-bold rounded-2xl hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300"
                >
                  Load More Products ({filtered.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}