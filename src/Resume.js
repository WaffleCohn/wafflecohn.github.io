import React from "react";

import { NewTabLink as A } from "./Utils.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Row from "react-bootstrap/Row";

import "./resume.css";

var ResumeItem = (props) => (
  <Col className="resume-item" sm={12}>
    <h3>
      {props.title}
      {props.subtitle ? " | " : ""}
      {props.subtitle ? (
        <span className="resume-item-subtitle">{props.subtitle}</span>
      ) : (
        <></>
      )}
    </h3>
    {props.detail ? (
      <span className="resume-item-detail">{props.detail}</span>
    ) : (
      <div />
    )}
    {props.content}
  </Col>
);

class Resume extends React.Component {
  render() {
    return (
      <div id="resume" className="main-container">
        <Header activeKey="resume" />

        <Container className="background" fluid>
          <Row className="background-strip" />
        </Container>

        <Container>
          <Col sm={{ span: 10, offset: 1 }}>
            <Row className="resume-section">
              <p id="resumePDFLink">
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  PDF Version <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </p>
              <h1>Education</h1>
              <ResumeItem
                title="Carnegie Mellon University"
                detail="Expected May 2021"
                content={
                  <div>
                    <p>B.S. in Computer Science, Minor in Economics</p>
                    <p>4.0 GPA</p>
                  </div>
                }
              />
            </Row>

            <Row className="resume-section">
              <h1>Experience</h1>
              <ResumeItem
                title="Facebook"
                subtitle="SWE Intern"
                detail="May - Aug 2020"
                content={
                  <ul>
                    <li>
                      Completed two full-stack projects implementing Alt Text
                      and Product Tagging for Instagram in FB’s Creator Studio.
                    </li>
                    <li>
                      Contributed to my team’s Quality Week, closing over 20
                      tasks to improve code quality.
                    </li>
                    <li>
                      Worked in React, Hack (PHP), Thrift (RPC Framework), and
                      Django.
                    </li>
                  </ul>
                }
              />
              <ResumeItem
                title="Zillow Group"
                subtitle="SWE Intern"
                detail="May - Aug 2019"
                content={
                  <ul>
                    <li>
                      Implemented a redesign of the Zillow Android app’s
                      onboarding pages and changed font for the whole app.
                    </li>
                    <li>
                      Fixed bugs across the Android app and contributed to
                      implementing dark mode on iOS.
                    </li>
                    <li>
                      Won first place in a Zillow-wide CTF (cybersecurity
                      contest) during hackweek.
                    </li>
                  </ul>
                }
              />

              <ResumeItem
                title="Carnegie Mellon University"
                subtitle="Teaching Assistant"
                detail="Aug 2018 – May 2019, Jan 2020 – Present"
                content={
                  <ul>
                    <li>
                      TA for{" "}
                      <A href="https://www.andrew.cmu.edu/course/18-330/2020f/">
                        Computer Security (15-330)
                      </A>
                      ,{" "}
                      <A href="http://www.cs.cmu.edu/~15122-archive/f18/">
                        Principles of Imperative Computation (15-122)
                      </A>
                      , and{" "}
                      <A href="https://www.cs.cmu.edu/~charlie/courses/17-214/2020-spring/index.html">
                        Principles of Software Construction (17-214)
                      </A>
                      .
                    </li>
                    <li>
                      Lead labs and recitations and provided office hours while
                      assisting with grading and course infrastructure.
                    </li>
                  </ul>
                }
              />

              <ResumeItem
                title="Aprima Medical Software"
                subtitle="SWE Intern"
                detail="May - Aug 2018, Jun - Jul 2017"
                content={
                  <ul>
                    <li>
                      Integrated 3rd party medical device software into the
                      Aprima practice management application.
                    </li>
                    <li>
                      Worked on creating and maintaining REST endpoints as well
                      as building custom validation software for API testing.
                    </li>
                  </ul>
                }
              />
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Resume;
