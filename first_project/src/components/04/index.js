import React, { Component } from 'react';
import './index.css';

export default class Fourth extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            },
            {
                username: "dennis_futbol",
                text: "Is"
            }
        ]
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>User Comments</h1>
                </div>
                <div>
                    {this.state.comments.map((user, index) => {
                            return ([
                            <div key={index} className="username">User: {user.username}</div>,
                            <div key={index} className="text">Text: {user.text}</div>
                            ]);
                        })}
                </div>
            </div>
        );
    }
}

