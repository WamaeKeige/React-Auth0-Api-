import React, { Component } from 'react'
import axios from 'axios'

export default class Apicalls extends Component {
  /**
   * componentWillMount
   * @return {void}
   */
  componentWillMount() {
    this.getReddit();
  }
  getReddit(){
    axios.get(`https://api.myjson.com/bins/qx3hh`).then(res =>{
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      posts:[],
      subr: 'Reddit Users'
    };
    this.getReddit = this.getReddit.bind(this);
  }
  render() {
    return (
      <div>
      <h1>{`/r/${this.state.subr}`}</h1>
      <ul>{this.state.posts.map(post =>
      <li key={post.id}>{post.author}</li>)}</ul>
    </div>
    );
  }
}
