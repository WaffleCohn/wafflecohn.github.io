import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import './about.css';

function ContactButton(props) {
  return (
    <a
      className="contact-button"
      href={props.href}
      target="_blank"
      title={props.title}
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
}

class About extends React.Component {
  render() {
    return (
      <div id="about" className="main-container">
        {/* preload headshot photos to reduce lag */}
        <link rel="preload" href="/img/headshot_front.jpg" as="image" />
        <link rel="preload" href="/img/headshot_back.jpg" as="image" />

        <Header />

        <Container className="background" fluid>
          <Row className="background-row">
            <Col className="background-strip" xs={12} lg={5}></Col>
          </Row>
        </Container>

        <div className="about-content">
          <Container fluid>
            <Row>
              <Col
                className="about-popout"
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 8, offset: 2 }}
                lg={{ span: 2, offset: 4 }}
              >
                <div className="profile-image" />

                <div id="contactButtons">
                  <ContactButton
                    href="https://www.linkedin.com/in/ari-cohn/"
                    icon={faLinkedin}
                    title="LinkedIn"
                  />
                  <ContactButton
                    href="/resume.pdf"
                    icon={faFile}
                    title="Resume (pdf)"
                  />
                  <ContactButton
                    href="https://github.com/WaffleCohn"
                    icon={faGithub}
                    title="Github"
                  />
                  <ContactButton
                    href="https://www.facebook.com/ari.cohn.7"
                    icon={faFacebook}
                    title="Facebook"
                  />
                </div>
              </Col>
              <Col
                className="about-text"
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 8, offset: 2 }}
                lg={{ span: 5, offset: 0 }}
              >
                <h1 className="title">Ari Cohn</h1>
                <p>
                  Hey, I'm Ari! I recently graduated from Carnegie Mellon
                  University with a degree in Computer Science and minor in
                  Economics. I now work as a software engineer for Meta in NYC.
                </p>
                <div id="aboutButtons">
                  <Link to="/resume">
                    <button id="resumeButton">Resume</button>
                  </Link>
                  <Link to="/projects">
                    <button id="projectsButton">Projects</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
