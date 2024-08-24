import React, { Component } from 'react'

export class CC extends Component {

    constructor(){
        super();
        this.state = {
            number : 0
        }
    }

    // componentWillMount(){
    //     // alert("Componetn will mout rendering")
    //     this.setState({number : 4})
    // }
    componentDidMount(){
        // alert("Componetn did mout rendering")
            this.setState({number : 5})
    }

    render() {
        return (
            <div>
                <h1>React LifeCyle in Class Component</h1>
                <h1>counter - {this.state.number}</h1>
            </div>
        )
    }
}

export default CC;

