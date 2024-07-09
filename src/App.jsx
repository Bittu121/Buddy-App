import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Safety from "./pages/Safety/Safety";
import ContactUs from "./pages/ContactUs/ContactUs";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Privacy from "./pages/TermsAndConditions/Privacy";
function App() {
  // const scrollToPrivacySection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop - 35,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
