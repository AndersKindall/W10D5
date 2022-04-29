import React, { Component } from 'react'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

    componentWillUnmount() {
        clearInterval(() => {
            this.currentTime
        })
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return (
            <>
                <h1>Clock</h1>
            <div class='clock'>
                <h1>Time: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getUTCSeconds()}</h1>
                <h1>Date: {days[this.state.time.getDay()]} {months[this.state.time.getMonth()]} {this.state.time.getDate()}, {this.state.time.getFullYear()}</h1>
            </div>
            </>
        )
    }
}

export default Clock