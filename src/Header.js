import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

import './header.css'

function NavLink(props) {
    return (
        <Nav.Item>
            <Link to={'/' + props.eventKey}>
                <Nav.Link as="span" href={'/' + props.eventKey} eventKey={props.eventKey}>{props.title}</Nav.Link>
            </Link>
        </Nav.Item>
    )
}

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="white" className="justify-content-end" expand="lg" variant="header" fixed="top">
                <Nav activeKey={this.props.activeKey || "about"}>
                    <NavLink eventKey="about" title="About Me" />
                    <NavLink eventKey="resume" title="Resume" />
                    <NavLink eventKey="projects" title="Projects" />
                </Nav>
            </Navbar>
        );
    }
}

export default Header;