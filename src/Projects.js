import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

import './projects.css';

function navigateTo(url) {
    // if (url) {
    //     document.location.href = url;
    // }
}

var ProjectItem = props => (
    <Link to={props.url}>
        <Col className="project-item" sm={12} onClick={navigateTo.bind(null, props.url)}>
            <Row>
                <Col className="project-icon" sm={2}>
                    <Image
                        src={props.img}
                        style={{ background: props.imgBackground || "white" }}
                    />
                </Col>

                <Col className="project-description" sm={10}>
                    <h3>{props.title}</h3>
                    {props.content}
                    <div className="more-info">find out more</div>
                </Col>
            </Row>
        </Col>
    </Link>
);

// TODO: add WWW.Booth
class Projects extends React.Component {
    render() {
        return (
            <div id="projects" className="main-container">
                <Header activeKey="projects" />

                <Container className="background" fluid>
                    <Row className="background-strip" />
                </Container>

                <Container>
                    <Col sm={{ span: 10, offset: 1 }}>
                        <h1 id="title">Projects</h1>

                        <ProjectItem
                            title="Egenda"
                            img="/img/egenda-logo.png"
                            content="Egenda is a homework planner and organizer for iOS and Android devices. It has over 500,000 downloads since August 2016."
                            url="projects/egenda"
                        />

                        <ProjectItem
                            title="Virtual Fence"
                            img="/img/fencing.png"
                            content="A virtual version of Carnegie Mellon's fence that anyone can come paint from their computer."
                            url="projects/virtual-fence"
                        />

                        <ProjectItem
                            title="Space Invaders 2018"
                            img="/img/SpaceInvadersLogo.png"
                            imgBackground="black"
                            content="Space Invaders 2018 is a modernized version of the classic arcade game I made with my team at the Pennapps hackathon. It uses an iPhone as a controller with a website displaying the game."
                            url="projects/space-invaders"
                        />

                        <ProjectItem
                            title="PhotoSlide"
                            img="/img/photoslide-logo.png"
                            content="PhotoSlide is an app that transforms your iPad into a digital photo frame that can endlessly scroll through photos with several kinds of transitions."
                            url="projects/photo-slide"
                        />
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Projects;