import React from 'react';
import Layout from '../Layout';
import ScrollView from './ScrollView';
// http://www.service-py.esy.es/ws_test_json/sprites/sprite_1.jpg
class ScrollPage extends React.Component {
    render() {
        return (
            <Layout>
                <ScrollView/>
            </Layout>
        );
    }
}

export default ScrollPage;