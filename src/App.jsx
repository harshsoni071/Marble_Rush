import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductGrid from "./components/ProductGrid";
import { WhyUs, Testimonials } from "./components/WhyUsTestimonials";
import Footer from "./components/Footer";
import { products } from "./products";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* <Hero onShopNow={scrollToProducts} /> */}
      {/* <FeaturedProducts /> */}
      <ProductGrid products={products} searchQuery={searchQuery} />
      {/* <WhyUs /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
}
