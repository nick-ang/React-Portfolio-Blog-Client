import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";



class Home extends Component {
  render() {
    AOS.init();
    return (
      <div className="app">
        {this.props.navbar}
        <div>

          <main>
            <div data-aos="fade-right">
              <About />
            </div>
            <div data-aos="zoom-in">
              <Projects />
            </div>
            <div data-aos="fade-right">
              <Skills />
            </div>
            <div data-aos="fade-up">
              <Testimonials />
            </div>
            <div data-aos="flip-left">
              <Contact />
            </div>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
