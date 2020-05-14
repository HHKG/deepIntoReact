import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      body:''
    }
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const post={
      title:this.state.title,
      body:this.state.body
    };
    fetch("http://jsonplaceholder.typicode.com/posts",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    }).then(res=>res.json)
    .then(data=>console.log(data));
  }
  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
    <div>
      <h1>添加内容</h1>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>title</label>
          <br></br>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
        </div>
        <div>
          <label>body</label>
          <br></br>
          <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
        </div>
        <br/>
        <button type="submit">添加</button>
      </form>
    </div>
    );
  }
}
export default PostForm;