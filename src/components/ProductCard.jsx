import React from "react";

const badgeColors = {
  "Best Seller": "bg-amber-400 text-slate-900",
  "Top Rated": "bg-emerald-400 text-slate-900",
  "New": "bg-sky-400 text-slate-900",
  "Deal": "bg-red-500 text-white",
  "Hot Deal": "bg-red-500 text-white",
  "Popular": "bg-violet-400 text-white",
  "Premium": "bg-slate-200 text-slate-900",
  "Budget Pick": "bg-lime-400 text-slate-900",
  "Gift Pick": "bg-pink-400 text-white",
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? "text-amber-600"
              : star - 0.5 <= rating
              ? "text-amber-600 opacity-60"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const handleClick = () => {
    if (product?.amazonLink) {
      window.open(product.amazonLink, "_blank", "noopener,noreferrer");
    }
  };

  const discount = product.originalPrice
    ? Math.round(
        ((parseFloat(product.originalPrice.replace(/[₹,$,]/g, "")) -
          parseFloat(product.price.replace(/[₹,$,]/g, ""))) /
          parseFloat(product.originalPrice.replace(/[₹,$,]/g, ""))) *
          100
      )
    : null;

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer 
      hover:border-amber-600/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300/50 
      transition-all duration-400 flex flex-col"
      onClick={handleClick}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-bold ${
            badgeColors[product.badge] || "bg-slate-600 text-white"
          }`}
        >
          {product.badge}
        </div>
      )}

      {/* Discount */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-red-500/90 backdrop-blur text-white rounded-lg text-xs font-bold">
          -{discount}%
        </div>
      )}

      {/* Image — fixed height, object-contain so full image is always visible */}
      <div className="relative bg-gray-50 flex-shrink-0" style={{ height: "180px" }}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-gray-900 text-sm font-semibold mt-1 mb-2 leading-snug line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-gray-600 text-xs">
            {product.rating} ({product.reviews?.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-gray-900 text-lg font-black">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 text-xs line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Button — always at bottom */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2.5 
          bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-sm 
          rounded-xl hover:shadow-lg hover:shadow-amber-600/30 hover:brightness-110 transition-all"
        >
          View on Amazon
        </button>
      </div>
    </div>
  );
}