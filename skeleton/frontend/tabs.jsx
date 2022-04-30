import React, { Component } from 'react'

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.updateActiveTab = this.updateActiveTab.bind(this)
    }

    updateActiveTab(click) {
        this.setState({index: parseInt(click.target.id)})
    }

    render() {
        const activeTab = this.props.objects[this.state.index]
        return (
            <div>
                <div>
                        <ul class="tab-container">
                            {this.props.objects.map((object, index) => {
                                return (
                                    <h1 class="tab-header" id={index} key = {index} onClick = {this.updateActiveTab}>{object.title}</h1>
                                )}
                            )}
                        </ul>
                </div>
                <article className="content-container">{activeTab.content}</article>
            </div>
        )
    }
}


export default Tab