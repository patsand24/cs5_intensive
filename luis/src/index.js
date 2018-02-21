import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Root extends React.Component {
    state = {
        posts: [
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
    ]
    }
    render () {
        return (
            <div>
                <h1>Hello {this.props.name} and {this.props.cohort}</h1>
                {this.state.posts.map((post) => {
                    return (
                        <Post key={post.id} post={post} onDelete={this.removePost} />
                    )
                })}
            </div>
        );
    }

    removePost = (id) => {
        const posts = this.state.posts.filter((post) => {
            return post.id !== id;
        });

        this.setState({ posts: posts })
    }
    
}

function ListItem(props) {
    
}

class Post extends React.Component {
    state = {
        showBody: false,
    }

    render() {
        const post = this.props.post;

        return (
            <div className="list-item">
                <h1>{post.title}</h1>
                <button onClick={ () => {this.props.onDelete(post.id)} }>Delete</button>
                <button onClick={this.toggleBody}>Show Body</button>
                {this.state.showBody === true ? <div>{post.body}</div> : null}
            </div>
        )
    }

    componentDidMount() {
        // you do AJAX calls here
        console.log('mounted');
        window.setTimeout(() => {
            this.setState({ status: 'mounted' });
        }, 1000);
    }

    toggleBody = () => {
        this.setState(prevState => { 
            return { showBody: !prevState.showBody };
        });
    };

}

ReactDOM.render(<Root name="patrick" cohort="cs5" />, document.getElementById('root'));