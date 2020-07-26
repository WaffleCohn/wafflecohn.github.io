import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

import './header.css'

function NavLink(props) {
    return (
        <Link to={'/' + props.eventKey}>
            <Nav.Link href={'/' + props.eventKey} eventKey={props.eventKey}>{props.title}</Nav.Link>
        </Link>
    )
}

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="white" className="justify-content-end" expand="lg" variant="header" fixed="top">
                <Nav activeKey={this.props.activeKey || "about"}>
                    <Nav.Item>
                        <NavLink eventKey="about" title="About Me" />
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="resume" title="Resume" />
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="projects" title="Projects" />
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;