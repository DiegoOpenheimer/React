import React, { Component } from 'react'

export default class NewComment extends Component {
    
    render() {
        return(
            <div className="row">
                <textarea style={{fontSize:'1.5rem', color:'blue'}} ref="textComment" onKeyUp={(event) => {
                    this.props.newComment(event, this.refs.textComment.value)
                   if(event.keyCode === 13) {
                    this.refs.textComment.value = ''
                   }
                }} placeholder="Comente!" className="form-control" />
            </div>
        )
    }
}