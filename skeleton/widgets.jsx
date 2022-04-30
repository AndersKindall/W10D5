import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './frontend/clock'
import Tab from './frontend/tabs'

document.addEventListener("DOMContentLoaded", () => {
    const tabs = [{ title: "one", content: "first tab"}, { title: "two", content: "second"}, { title: "three", content: "third" }]
    ReactDOM.render( 
        <div>
            <Clock/>
            <Tab objects = {tabs} />
        </div>
    , root)
})