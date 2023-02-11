import React, { Component } from "react";
import './Counter.css';
import Buttonspanel from "./buttonspanel";
import Step from './Step';


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1
        };

       
    }

    
    changeValue = (action) => { 

        this.setState((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    changeStep = (event) => {
        this.setState((prevState)=> {
            return({
               
                stepValue: Number(event.target.value),
            
                 counterValue: Number(prevState.counterValue) + Number(this.state.stepValue)
                 
                 
                 
                
                 
            })
        })
       //console.log(event.target.value);
    }

   

    render() {
       
    


        return (
            <div className="counter">
                Counter: <span className="Value" >
                    {this.state.counterValue}
                </span>
                
                <Buttonspanel buttonMethod={this.changeValue} />
                <Step changeStep={this.changeStep}/>
                <p>{this.state.stepValue}</p>
            </div>
        );
    }





  
}





export default Counter;