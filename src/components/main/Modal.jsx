import React from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import logo from '../../logo.svg'
class FindModal extends React.Component {

    handleClose = () => {
        this.props.close()
    }

    render() {
        return (
            <Modal id='modal' show={this.props.show} onHide={this.handleClose} >
                <Modal.Header>
                  <Button size='sm' className='ml-auto'><i onClick={this.handleClose}  className='fa fa-times fa-2x'></i></Button>
                </Modal.Header>
                <Modal.Body>
                   
                    <Row>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image style={{backgroundRepeat:'no-repeat'}} className={this.props.className+' stretch'} src='' width='100%' height='200px' />
                            <p className='text-center'>Selected element:{this.props.element}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                        <Col>
                            <Image rounded src={logo} />
                        </Col>
                    </Row>


                </Modal.Body>
                <Modal.Footer style={{borderRadius:0}}>
                        <p>Car title</p>
                        <p>Sub title</p>
                </Modal.Footer>
                <Modal.Footer>
                        <p>Car title</p>
                        <div>
                        <i className='fa fa-share-alt fa-lg'></i>
                        <i className='fa fa-star fa-lg'></i>
                        </div>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FindModal;