import React, { Component } from 'react';

class Second extends Component {
    render() {
        return (
            <div>
                {this.props.blanket}
            </div>
        )
    }
}

export default Second;