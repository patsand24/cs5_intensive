import React, { Component } from 'react';

export default class Third extends Component {
    constructor() {
        super();
        this.state = {
            children: [
                {name: 'one', age:'two'},
                {name: 'a', age: 'three'}]
        }
    }
    
    render() {
        return (
            <div>
                {this.state.children.map((child, index) => {
						return (
                            <p key={index}>{child.name}</p>
                        );
					})}
            </div>
        );
    }
}

