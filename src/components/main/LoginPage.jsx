import React, { useState, Fragment } from 'react';
import Layout from '../Layout';
import ScrollView from './ScrollView';
import { Card } from 'react-bootstrap';
// http://www.service-py.esy.es/ws_test_json/sprites/sprite_1.jpg
const LoginPage = props => {
    const [userType, setUserType] = useState(null);
    const [step, setStep] = useState(0);
    const ChooseUserType = (type) => {
        setUserType(type);
        setStep(1);
    }
    return (
        <Layout className='igBackground'>
            {step === 0 &&
                <Fragment>
                    <Card onClick={() => ChooseUserType('A')} className='darkModal w-75'>
                        <Card.Body>
                            <p>User A</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed labore obcaecati laboriosam vero accusamus necessitatibus nulla architecto alias officia consequatur, saepe ipsum, eaque qui. Tempore doloremque officia dolorem quia est!</p>
                        </Card.Body>
                    </Card>
                    <Card onClick={() => ChooseUserType('B')} className='darkModal w-75'>
                        <Card.Body>
                            <p>User A</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed labore obcaecati laboriosam vero accusamus necessitatibus nulla architecto alias officia consequatur, saepe ipsum, eaque qui. Tempore doloremque officia dolorem quia est!</p>
                        </Card.Body>
                    </Card>
                </Fragment>
            }
            {
                step === 1 &&
                <Card onClick={() => ChooseUserType('A')} className='darkModal w-75'>
                    <Card.Body>
                        <p>User A</p>
                        <p>Register with your instagram account to participate, you will be redirected to the instagram official site to complete the process, are you ready?</p>
                        <a href='https://www.instagram.com/oauth/authorize?client_id=2535574703164297&redirect_uri=https://1671ebe0.ngrok.io/&scope=user_profile,user_media&response_type=code'>GO</a>
                    </Card.Body>
                </Card>

            }
        </Layout>
    );
}

export default LoginPage;