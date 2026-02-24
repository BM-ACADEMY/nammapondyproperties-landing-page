// src/App.jsx
import Navbar from './components/layout/Navbar';
// Import your sections...
// import Hero from './sections/Hero';
// ... etc.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './sections/Hero';
import TrustBar from './sections/Trustbar';
import WhyChooseUs from './sections/WhyChooseUS';
import HowItWorks from './sections/HowItWorks';
import TypesOfUsers from './sections/TypesOfUser';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <HowItWorks />
        <TypesOfUsers />
      </main>
      <Footer />

    </div>
  );
}

export default App;
