import React, {Component} from "react";
import '../components/CC1.css';


class CC1 extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "yellow",
            bgcolor: "black"
        }
    }
    changecolor = () =>{
        this.setState({color:'green'})
    }
    changebgcolor = () =>{
        this.setState({bgcolor:'blue'})
    }


    render(){
        return(
            <div>
                <h2 className="hello">External CSS in ReactJS</h2>
                <button onClick={this.changecolor}>Change Color</button><br/><br/>
                <button onClick={this.chan}>Change BG-Color</button>
                {/* <h1 style={{color:"red", background:"lightblue"}}> CSS in ReactJS</h1> */}
            </div>
        )
    }
}

export default CC1;