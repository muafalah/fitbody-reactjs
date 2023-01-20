import { useEffect } from "react";
import AOS from 'aos'
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Hero from "./components/UI/Hero";
import Pricing from "./components/UI/Pricing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";

function App() {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;
