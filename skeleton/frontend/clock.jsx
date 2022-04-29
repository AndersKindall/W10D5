import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date()
        }
    }
    
    componentDidMount() {
        this.currentTime = setInterval(() => {
            this.tick()
        }, 1000)
    
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return (
            <div class='clock'>
                <h1>Clock</h1> 
                <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getUTCSeconds()}</p>
            </div>
        )
    }
}

export default Clock