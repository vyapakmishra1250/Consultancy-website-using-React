import React from 'react';
import Common from './Common';
import web from '../src/images/home.svg'


const Home = (props) => {
    return(<>
      <Common name='Grow your buisness with' imgsrc={web} visit="/service" btname="Get started"/>
    </>);
};

export default Home;