export function WhyUs() {
  const features = [
    {
      icon: "🛡️",
      title: "100% Secure Shopping",
      desc: "All purchases are made directly on Amazon — the world's most trusted marketplace.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20",
    },
    {
      icon: "⚡",
      title: "Best Price Guaranteed",
      desc: "We curate the absolute best deals so you never overpay for premium products.",
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/20",
    },
    {
      icon: "⭐",
      title: "Top-Rated Products Only",
      desc: "Every product is rated 4.0+ stars with thousands of verified customer reviews.",
      color: "from-violet-500/20 to-purple-500/10 border-violet-500/20",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      desc: "Amazon's hassle-free return policy ensures you can shop with complete confidence.",
      color: "from-sky-500/20 to-blue-500/10 border-sky-500/20",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      desc: "Prime-eligible products with 1–2 day delivery across India.",
      color: "from-red-500/20 to-rose-500/10 border-red-500/20",
    },
    {
      icon: "💎",
      title: "Premium Curation",
      desc: "Our experts handpick only the best products from top brands in every category.",
      color: "from-pink-500/20 to-fuchsia-500/10 border-pink-500/20",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-700 text-sm font-bold uppercase tracking-widest mb-3">
            Our Promise
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Why Choose DealZone?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're not just another deal site — we're your trusted guide to the
            smartest buys on Amazon India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 rounded-2xl hover:scale-105 transition-all duration-300 group border-gray-200`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-700 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Arjun Sharma",
      location: "Mumbai",
      avatar: "AS",
      rating: 5,
      text: "Found my Sony headphones here at an amazing price. Clicked the link, bought on Amazon in seconds. Will recommend to everyone!",
      product: "Sony WH-1000XM5",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Priya Reddy",
      location: "Bangalore",
      avatar: "PR",
      rating: 5,
      text: "The product cards are so detailed — ratings, prices, discounts. Saved me hours of research. Bought a Fire TV Stick and it's amazing.",
      product: "Fire TV Stick 4K",
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Rohit Verma",
      location: "Delhi",
      avatar: "RV",
      rating: 4,
      text: "Clean website, easy to filter products. The 'View on Amazon' button is super convenient. Got my gaming keyboard at 40% off!",
      product: "RGB Keyboard",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Kavya Nair",
      location: "Chennai",
      avatar: "KN",
      rating: 5,
      text: "DealZone is my go-to for gifting. Found the Fujifilm Instax for my sister's birthday with a great deal. She absolutely loves it!",
      product: "Fujifilm Instax Mini 12",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Vikram Patel",
      location: "Ahmedabad",
      avatar: "VP",
      rating: 5,
      text: "The search and filter feature is excellent. Found all my home office setup products — monitor, mouse, and keyboard — in one place.",
      product: "HP Monitor + Peripherals",
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "Sneha Joshi",
      location: "Pune",
      avatar: "SJ",
      rating: 4,
      text: "Bought the boAt earbuds after seeing them here. Price was the best I found anywhere. Super fast delivery from Amazon too!",
      product: "boAt Airdopes 141",
      color: "from-lime-500 to-green-600",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-700 text-sm font-bold uppercase tracking-widest mb-3">
            Customer Love
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What Our Shoppers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Real feedback from real people who found amazing deals on DealZone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${s < r.rating ? "text-amber-600" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                "{r.text}"
              </p>

              {/* Product tag */}
              <div className="text-xs text-amber-700 font-semibold mb-4">
                Purchased: {r.product}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{r.name}</div>
                  <div className="text-gray-500 text-xs">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
