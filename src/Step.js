import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";


class step extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            stepValue: 1,
        }   
        
       
        
    }



    render() { 
        return (
            <div> 
                <input type="number" onChange={this.props.changeStep} />
                <input ref={(data) => { this._inputStep = data }} onChange={this.updateStep} type = 'number'></input>            
                <button onClick={this.props.changeStep}>Zwieksz krok o:  {this.state.stepValue}</button>
            </div>
        )    
    
    }   
} 
        
export default step;