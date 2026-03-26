import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Parallax from './components/Parallax';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Hours from './components/Hours';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4b09ad] selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Parallax />
        <Gallery />
        <Testimonials />
        <QuoteForm />
        <Hours />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
