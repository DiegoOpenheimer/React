import React from 'react'

export default class CounterClass extends React.Component {

    state = {
        counter: 0
    }

    componentDidMount() {
        console.log('counter class did mount')
    }

    componentWillUnmount() {
        console.log('counter class unmount')
    }

    render() {
        return(
            <div>
                <p>COUNTER CLASS: { this.state.counter }</p>
                <p>COUNTER CLASS PROPS: { this.props.counter }</p>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <hr />
            </div>
        )
    }

}