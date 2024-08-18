import React, {Component} from "react";
import '../components/CC1.css';

class CC1 extends React.Component{

    render(){
        return(
            <div>
                <h2 className="hello">External CSS in ReactJS</h2>
                <button>Change Color</button><br/><br/>
                <button>Change BG-Color</button>
                {/* <h1 style={{color:"red", background:"lightblue"}}> CSS in ReactJS</h1> */}
            </div>
        )
    }
}

export default CC1