import React from 'react'
import Car from './Car'
class Garage extends React.Component {
    render(){
        const shoot = (event) => {
            alert('Button clicked.');
            console.log('event information: ', event);
        }

        return (
        <> 
            <h1>Model is {this.props.model} </h1>
            <Car model= {this.props.model}/>
            <button onClick={shoot}>Btn</button>
        </>
        );
    }
}

export default Garage;