import React from 'react';
import { Redirect, useParams } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../Header';
import Row from 'react-bootstrap/Row';

import Egenda from './Egenda';
import VirtualFence from './VirtualFence';
import SpaceInaders from './SpaceInaders';

import './project.css';
import PhotoSlide from './PhotoSlide';

function ProjectPage() {
    let pages = {
        'egenda': Egenda,
        'virtual-fence': VirtualFence,
        'space-invaders': SpaceInaders,
        'photo-slide': PhotoSlide,
    };

    // TODO: redirect bad links to project not found page


    let { id } = useParams();
    let page = pages[id];
    if (!page) {
        return <Redirect to="/projects" />
    }
    return (
        <div id="project" className="main-container">
            <Header activeKey="projects" />

            <Container className="background" fluid>
                <Row className="background-strip" />
            </Container>

            <Container>
                <Col sm={{ span: 10, offset: 1 }}>
                    <h1 id="title">{page.title}</h1>
                    <div id="content">
                        {page.content}
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default ProjectPage;