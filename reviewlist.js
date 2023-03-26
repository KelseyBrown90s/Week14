import React from 'react';
import ReviewForm from './ReviewForm';

export default class ReviewList extends React.Component{
    render(){
        <form>
            <label>
                Please sumbit your review for the movie here.
                <input type="review" name="review" />
            </label>
                <input type="submit" name="submit" />
        </form>
        //above is my review text submission for user 
return(
<div>
<ReviewForm/>
</div>
);

//the review form is separate. I read the instructions as two separate review forms, but I believe it renders as one.




    }



}