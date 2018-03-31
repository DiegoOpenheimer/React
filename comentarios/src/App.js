import React, { Component } from 'react'
import 'bootstrap-css-only'

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
      <div className="container">
        <NewComment newComment={this.postNewComment.bind(this)} />
        <Comment comments={this.state.comments} />
      </div>
    )
  }
}

export default App
