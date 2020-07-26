import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css'
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="white" className="justify-content-end" expand="lg" variant="header" fixed="top">
                <Nav activeKey={this.props.activeKey || "about"}>
                    <Nav.Item>
                        <Nav.Link href="/about" eventKey="about">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/resume" eventKey="resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects" eventKey="projects">Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;