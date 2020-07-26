import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import Row from 'react-bootstrap/Row';

import './about.css';

function ContactButton(props) {
    return (
        <a className="contact-button" href={props.href} target="_blank" title={props.title} rel="noopener noreferrer">
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
                        <Col className="background-strip" xs={5}></Col>
                    </Row>
                </Container>

                <div className="about-content">
                    <Container fluid>
                        <Row>
                            <Col className="about-popout" xs={{ span: 2 , offset: 4 }}>
                                <div className="profile-image" />

                                <div id="contactButtons">
                                    <ContactButton href="mailto:ari.b.cohn@gmail.com" icon={faEnvelope} title="Email" />
                                    <ContactButton href="/Resume.pdf" icon={faFile} title="Resume (pdf)" />
                                    <ContactButton href="https://github.com/WaffleCohn" icon={faGithub} title="Github" />
                                    <ContactButton href="https://www.facebook.com/ari.cohn.7" icon={faFacebook} title="Facebook" />
                                </div>
                            </Col>
                            <Col className="about-text" xs={5}>
                                <h1 className="title">Ari Cohn</h1>
                                <p>Hi, I’m Ari! I’m a senior studying Computer Science at Carnegie Mellon University with a minor in Economics. This fall, I will be co-teaching a course titled Introduction to Esoteric Programming Languages as well as TAing for 15-330 Introduction to Computer Security. Outside of school, I enjoy biking, soccer, and volleyball.</p>
                                <div id="aboutButtons">
                                    <a href="/resume"><button id="resumeButton">Resume</button></a>
                                    <a href="/projects"><button id="projectsButton">Projects</button></a>
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