import React from "react";
import Slider from "react-slick";

// Custom Arrows to act as the "Side Nav"
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-white/40 hover:text-white transition-all bg-black/10 hover:bg-black/20 p-2 rounded-full"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-white/40 hover:text-white transition-all bg-black/10 hover:bg-black/20 p-2 rounded-full"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

const HeroComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Referencing images from public/images/
  const images = [
    "/images/hero.avif",
    "/images/hero2.avif",
    "/images/hero3.avif", // Ensure you have a second image or repeat hero1
  ];

  return (
    <div className="relative w-full h-[90vh] min-h-[800px] overflow-hidden bg-zinc-900 font-sans">

      {/* 1. BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings} className="h-full hero-slick-slider">
          {images.map((img, index) => (
            <div key={index} className="h-[90vh] min-h-[800px] outline-none">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-[5000ms] scale-105 animate-slow-zoom"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Optional: Dark overlay to make form pop */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 2. SLIM OVERLAY FORM */}
      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-end px-12 lg:px-40 z-40 pointer-events-none">
        <div className="bg-[#1a1a1a] text-white p-8 w-full max-w-[340px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-[5px] border-[#ff6600] pointer-events-auto transform translate-y-[-20px]">
          <p className="text-base font-light mb-0 text-gray-300">Welcome to your</p>
          <h2 className="text-4xl font-black mb-10 tracking-tight leading-[1.1]">New Living!</h2>

          <form className="space-y-6">
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 block text-gray-400">Your Name*</label>
              <input type="text" className="w-full bg-white text-black px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#ff6600] transition-all" required />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 block text-gray-400">Your Email*</label>
              <input type="email" className="w-full bg-white text-black px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#ff6600] transition-all" required />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 block text-gray-400">Your Phone*</label>
              <input type="tel" className="w-full bg-white text-black px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-[#ff6600] transition-all" required />
            </div>

            <button className="w-full bg-[#ff6600] hover:bg-[#e65c00] transition-all duration-300 py-4 font-extrabold text-sm uppercase tracking-[0.2em] mt-6 shadow-lg active:scale-[0.98]">
              Get Notified!
            </button>
            <p className="text-[10px] text-gray-500 mt-4 text-center italic uppercase font-medium">Required Fields</p>
          </form>
        </div>
      </div>

      {/* 3. DARK BOTTOM BANNER */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1a1a1a]/95 py-12 z-20 border-t border-white/5">
        <div className="container mx-auto px-12 lg:px-32 flex items-center justify-between">
          <div className="max-w-2xl">
            <h3 className="text-white text-4xl font-bold mb-2 tracking-tight">Final inspection just started!</h3>
            <p className="text-gray-400 text-lg font-light">Subscribe and get notified about new condos for you</p>
          </div>

          <div className="text-[#ff6600] cursor-pointer hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
