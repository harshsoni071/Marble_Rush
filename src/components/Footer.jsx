export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                  <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-black text-xl">Deal</span>
                <span className="text-amber-600 font-black text-xl">Zone</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted destination for the best Amazon deals on electronics,
              gadgets, and more. We curate, you save.
            </p>
            <div className="mt-6 p-4 bg-amber-600/10 border border-amber-600/30 rounded-xl">
              <p className="text-amber-600/90 text-xs font-medium">
                ⚠️ Affiliate Disclosure: DealZone participates in the Amazon
                Associates Program. We earn a commission on qualifying purchases
                at no extra cost to you.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Best Sellers", "New Arrivals", "Today's Deals", "Why Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-amber-600 text-sm transition-colors"
                    onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              {["Electronics", "Cameras", "Gaming", "Smart Home", "Audio", "Wearables"].map((cat) => (
                <li key={cat}>
                  <span className="text-gray-400 text-sm">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DealZone. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Powered by</span>
            <div className="flex items-center gap-1 bg-orange-600/10 border border-orange-600/30 px-3 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685z" />
                <path d="M17.144 17.795c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.097v-.41c0-.753.06-1.642-.384-2.292-.385-.579-1.128-.82-1.785-.82-1.214 0-2.291.623-2.556 1.911-.054.285-.267.567-.55.58l-3.085-.333c-.26-.059-.547-.267-.473-.663C5.9 1.52 9.268 0 12.293 0c1.553 0 3.584.414 4.814 1.588v.001c1.155 1.248 1.046 2.914 1.046 4.727v4.282c0 1.286.534 1.852 1.038 2.549.176.248.215.545-.009.729l-2.038 1.919z" />
              </svg>
              <span className="text-orange-600 font-semibold text-xs">Amazon Associates</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
