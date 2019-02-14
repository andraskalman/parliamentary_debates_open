import React, {Component} from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-bar/dist/index.css';
import {Container} from 'react-bootstrap';
import Home from './Home';
import {Button, Navbar, Nav} from 'react-bootstrap';
import {toggle} from './store/modules/help';
import {toggle as toggleAbout} from './store/modules/about';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';

class App extends Component {
  UNSAFE_componentWillMount() {
    document.title = 'A magyar országgyűlés felszólalásai 1990 óta';
  }

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" sticky="top">
          <Navbar.Brand>
            <img src={logo} height={40} />
            &nbsp; Az Országgyűlés felszólalásai 1990 óta
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
 <Button onClick={this.props.toggleAbout}>
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp;
              <span>Mi ez?</span>
            </Button>

            <Button onClick={this.props.toggle}>
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp;
              <span>Mi ez?</span>
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Container style={{marginTop: '2em'}}>
          <Home />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  help: state.help,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggle,
      toggleAbout,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
