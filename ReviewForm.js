import React from "react";



export default class ReviewForm extends React.Component{
    

        render(){
            return(
            <>
           
            <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for=" Movie Name">Movie Name</label>
                            <input type="text" class="form-control" id="Movie name" placeholder="Movie Name"></input>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="Movie Review">Movie Review</label>
                            <input type="text" class="form-control" id="Movie Review" placeholder="Movie Review"></input>
                        </div>
                    </div>
                    </div>
                    <button id="add" class="btn btn-primary form-control">Submit</button>
                </div>
            </div>
           
        <div class="table-responsive-lg">
            <table id="list" class="table table-dark table-hover" >
                <tbody>
                <tr>
                    <th scope="col" id="Movie Name">Movie Name</th>
                    <th scope="col" id="Movie Review">Movie Review</th>
                </tr>
                </tbody>
            </table>
            </div>
            
        </>
            );
    }
}
//This above is the review form I had luck with table method before so I tried that.