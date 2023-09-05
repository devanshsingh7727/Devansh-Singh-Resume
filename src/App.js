import React, { Component } from "react";

import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import MainDivAnimation from "./Components/Framer/MainDivAnimation";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <MainDivAnimation>
          <Header data={this.state.resumeData.main} />
        </MainDivAnimation>
        <MainDivAnimation>
          <About data={this.state.resumeData.main} />
        </MainDivAnimation>
        <MainDivAnimation>
          <Portfolio data={this.state.resumeData.portfolio} />
        </MainDivAnimation>
        <MainDivAnimation>
          <Resume data={this.state.resumeData.resume} />
        </MainDivAnimation>
        <MainDivAnimation>
          <Testimonials data={this.state.resumeData.testimonials} />
        </MainDivAnimation>
        <MainDivAnimation>
          <Contact data={this.state.resumeData.main} />
        </MainDivAnimation>
        <MainDivAnimation>
          <Footer data={this.state.resumeData.main} />
        </MainDivAnimation>
      </div>
    );
  }
}

export default App;
