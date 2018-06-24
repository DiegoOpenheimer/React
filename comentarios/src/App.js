import React, { Component } from 'react'
import 'bootstrap-css-only'
import $ from 'jquery'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import base from './Firebase/firebase'

import NewComment from './NewComment'
import Comment from './Comment'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: {
      }
    }

    const syncComments = base.syncState('comments', {
      context:this,
      state:'comments'
    })
  }

  postNewComment(e, comment) {
    if(e.keyCode === 13) {
      let s = this.state
      s.comments = {...this.state.comments, [new Date().getTime()]: { comment }}
      this.setState(s)
    }
   }

  render() {
    return (
      <Router>
        <div className="container">
          <NewComment newComment={this.postNewComment.bind(this)} />
          <Comment comments={this.state.comments} />
       </div>
      </Router>
    )
  }
}

export default App
