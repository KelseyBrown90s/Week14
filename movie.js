import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './reviewlist';
import Stars from './stars';




export default class Movie extends React.Component{
    constructor(props){
     super(props);
     this.state = {
        name:props.name,
        synopsis:props.synopsis,
        rating:props.rating,
        releaseYear:props.releaseYear
     };
     this.handleClick=() => {
        console.log('clickity');
     }
    }
render(){
    return(
        <>
<button
        ClassName="btn btn-primary"
        onClick={this.handleClick}>
        {this.state.name} {this.state.synopsis} {this.state.rating} {this.state.releaseYear} <Stars/>
</button>
<ReviewList/>
<ReviewForm/>
</>


    );
}


}