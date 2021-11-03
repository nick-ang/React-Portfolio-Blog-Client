import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";



class Home extends Component {
  render() {
    AOS.init();
    return (
      <div className="app">
        {this.props.navbar}
        <div>
          {/* <ScrollContainer className="container mx-auto text-center">
            <main className="text-gray-400 bg-gray-900 body-font">
              <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <About className="w-100" />
                </Animator>
              </ScrollPage>
              <ScrollPage page={1}>
                <Animator animation={FadeUp}>
                  <Projects />
                </Animator>
              </ScrollPage>
              <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <Skills />
                </Animator>
              </ScrollPage>
              <ScrollPage page={3}>
                <Animator animation={batch(Fade(), Sticky())}>
                  <Testimonials />
                </Animator>
              </ScrollPage>
              <ScrollPage page={4}>
                <Animator animation={ZoomInScrollOut}>
                  <Contact />
                </Animator>
              </ScrollPage>
            </main>
          </ScrollContainer> */}
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
