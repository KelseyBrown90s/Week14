import React from 'react';
import bind from 'react';

export default class Stars extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        name:props.name,
        count:0
     };
    
     this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.count < 5){
        this.setState(state => ({count:state.count + 1}));
        }
    }
    render(){
        return(
            <>
    <button
            ClassName="btn btn-primary"
            onClick={this.handleClick}>
            {this.state.name} {this.state.count} {"stars"}
    </button>
    </>
    );
        }
    }
