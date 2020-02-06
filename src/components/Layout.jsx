import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar fixed='top' fluid id='topbar'>
                    {
                        this.props.search ?
                        <Form inline>
                        <InputGroup>
                          
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                placeholder='Buscar'
                                className='search-input'
                            />
                            
                        </InputGroup>
                    </Form>
                            :
                            <Navbar.Brand href="#home">App Name</Navbar.Brand>
                    }
                    <Nav className='ml-auto'>
                      
                        <Nav.Item style={{ fontSize: 20 }}><span >1234</span> <i className='fa fa-star' style={{ color: 'gold' }} /></Nav.Item>
                    </Nav>
                </Navbar>
                <div id='content' {...this.props}>
                    {this.props.children}
                </div>
                <Navbar fluid fixed='bottom' id='bottombar'>

                    <Nav className='w-100'>
                        <Nav.Link className='py-0 text-center flex-grow-1' href="#home"><i className='fa fa-2x fa-user' /></Nav.Link>
                        <Nav.Link className='py-0 text-center  flex-grow-1' href="#features"><i className='fa fa-2x fa-search' /> </Nav.Link>
                        <Nav.Link className='py-0 text-center flex-grow-1' href="#pricing"><i className='fa fa-2x fa-star' style={{ color: 'gold' }} /></Nav.Link>
                        <Nav.Link className='py-0 text-center flex-grow-1' href="#pricing"><i className='fa fa-2x fa-heart' style={{ color: 'red' }} /></Nav.Link>

                    </Nav>

                </Navbar>
            </React.Fragment>
        )
    }
}

export default Layout;