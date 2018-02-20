import React, { Component } from 'react';
// import Navbar from './Navbar';
import Heading from './Heading';
import './index.css';
import Image from './Image';
import Body from './Body'

export default class Third extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    {/* <Navbar /> */}
                    <Heading />
                    <Image />
                </div>
                <Body />
            </div>
        );
    }
}

