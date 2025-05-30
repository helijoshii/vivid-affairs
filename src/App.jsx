import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="pt-20 pb-20 bg-backgroundColor">
        <About />
      </section>
      <section className="pt-20 bg-backgroundColor">
        <Services />
      </section>
      <section className="pt-20 bg-backgroundColor">
        <Contact />
      </section>
      <section className="pt-20 bg-backgroundColor">
        <Footer />
      </section>
    </>
  );
};

export default App;
