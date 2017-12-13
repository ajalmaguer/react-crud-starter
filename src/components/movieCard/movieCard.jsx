import React from 'react';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    // console.log('MovieCard > props =', props)
    const movie = props.movie;
    return(
        <div>
            name = {movie.name} | id = {movie._id} | <Link to={`/movies/${movie._id}`}>link</Link>
        </div>
    )
}

// if you want to make it a class instead
// class MovieCard extends Component {
//     constructor (props) {
//         super()
//         this.state = {
//             movie: props.movie
//         }
//     }

//     render() {
//         return (
//             <div>
//                 name = {this.state.movie.name} | id = {this.state.movie._id}
//             </div>
//         )
//     }
// }

export default MovieCard;
