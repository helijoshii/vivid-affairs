import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
const App = () => (
  <BrowserRouter>
    <section id="home">
      <Navbar />
      <Hero />
    </section>
    <section className="pb-20 bg-backgroundColor" id="about">
      <About />
    </section>
    <section className="md:pt-20 bg-backgroundColor" id="services">
      <Services />
    </section>
    <section className="pt-20 bg-backgroundColor" id="contact">
      <Contact />
    </section>
    <section className="pt-20 bg-backgroundColor" id="footer">
      <Footer />
    </section>
  </BrowserRouter>
);

export default App;
