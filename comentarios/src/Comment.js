import React, { Component } from 'react'

export default class Comment extends Component {

    componentDidUpdate() {
        this.scrollToBotton(this.refs.comments)
    }

    scrollToBotton(ref) {
        ref.scrollTop = ref.scrollHeight - ref.clientHeight
    }

    render() {
        let comments = []
        for (let i in this.props.comments) {
            comments.push((<p className="alert alert-secondary" style={{ fontSize: '1.5rem', margin:15 }} key={i}>{this.props.comments[i].comment}</p>))
        }

        return (
            <div ref="comments" style={{overflowY:'auto', height:500}}>
                {comments}
            </div>
        )
    }
}