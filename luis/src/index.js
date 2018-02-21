import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Root(props) {
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            body: 'body of post 1'
        },
        {
            id: 2,
            title: 'Post 2',
            body: 'body of post 2'
        },
        {
            id: 3,
            title: 'Post 3',
            body: 'body of post 3'
        },
        {
            id: 4,
            title: 'Post 4',
            body: 'body of post 4'
        },
    ];


    return (
        <div>
            <h1>Hello {props.name} and {props.cohort}</h1>
            {posts.map((post) => {
                return (
                    <Post key={post.id} title={post.title} body={post.body} />
                )
            })}
        </div>
    );
    
}

function ListItem(props) {
    
}

class Post extends React.Component {
    state = {
        showBody: false,
    }

    render() {
        return (
            <div className="list-item">
                <h1>{this.props.title}</h1>
                <button onClick={this.toggleBody}>Show Body</button>
                {this.state.showBody === true ? <div>{this.props.body}</div> : null}
            </div>
        )
    }

    toggleBody = () => {
        this.setState(prevState => { 
            return { showBody: !prevState.showBody };
        });
    };

}

ReactDOM.render(<Root name="patrick" cohort="cs5" />, document.getElementById('root'));