import React, { Component } from "react";
import { motion } from "framer-motion";
class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects, i) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <motion.div
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2 * i,
                },
              }),
            }}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={i}
            key={projects.title}
            className='columns portfolio-item'
          >
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title}>
                <img
                  alt={projects.title}
                  src={projectImage}
                  style={{ height: "130px" }}
                />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'></i>
                </div>
              </a>
            </div>
          </motion.div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
