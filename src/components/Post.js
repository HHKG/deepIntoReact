import React, { Component } from 'react';
import {fetchPosts} from '../actions/postActions';
import {connect} from 'react-redux';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount = () => {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.state.posts.map((val, index) => {
      return (<div key={val.id}>
        <h3>{val.title}</h3>
        <p>{val.body}</p>
      </div>)
    })
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default connect(null,{fetchPosts})(Posts);