import React from 'react';
import Movie from './movie';



export default class MovieList extends React.Component{

    


    render(){
        return(
            <div>
            <Movie name = "Space Jam"  synopsis="Synopsis: Looney toons and basketball stars." rating="rating: 4.5/5" releaseYear="releaseYear: 1996" />
            <Movie name = "The Princess Switch"  synopsis="Synopsis: A princess and a baker who look indetical switch lives for a few days and find love." rating="rating: 4.4/5" releaseYear="releaseYear: 2018" />
            <Movie name = "Hocus Pocus"  synopsis="Synopsis: A family moves from California to Salem and they encounter 3 witches." rating="rating: 4.6/5" releaseYear="releaseYear: 1993" />
            </div>


        );
    }
}
//This contains our movies, and which three of them are already entered.
//I'm not for sure if this is correct because I know we didn't need a database so I just used a few movies like the array suggested.
