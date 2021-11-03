import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

class Home extends Component {
  render() {
    return (
      <div className="app">
        {this.props.navbar}
        <div>
          <ScrollContainer>
            <main className="text-gray-400 bg-gray-900 body-font">
              <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <About className="w-100"/>
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
          </ScrollContainer>
        </div>
      </div>
    );
  }
}

export default Home;
