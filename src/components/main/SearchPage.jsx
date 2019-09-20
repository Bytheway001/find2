import React from 'react';
import Layout from '../Layout';
import { Container,Row,Col,Image } from 'react-bootstrap';
import logo from '../../logo.svg'
class SearchPage extends React.Component{
    render(){
        return(
            <Layout search={true}>
               <div className='container' id="search-page">
                  <Row>
                    <Col sm={2} xs={4}>
                       <Image roundedCircle src={'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} className='search-img'/>
                    </Col>
                    <Col sm={10} xs={8}>
                      <p className='item-desc'>ITEM 01</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2} xs={4}>
                       <Image roundedCircle src={'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} className='search-img'/>
                    </Col>
                    <Col sm={10} xs={8}>
                      <p className='item-desc'>ITEM 01</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2} xs={4}>
                       <Image roundedCircle src={'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} className='search-img'/>
                    </Col>
                    <Col sm={10} xs={8}>
                      <p className='item-desc'>ITEM 01</p>
                    </Col>
                  </Row>
               </div>
            </Layout>
        )
    }
}

export default SearchPage;