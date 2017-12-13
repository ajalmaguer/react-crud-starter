import React, { Component } from 'react';
import MovieCard from '../../components/movieCard/movieCard'

// 1. setup constructor and state and component did mount method
// 2. make sure component can render when this.state.movies = []; aka before we make the api call for the movies
// 4. call the getMovies() method within componentDidMount, which updates the state with mock data from the api
// 5. render the movies
// 6. make an actual api call

class MoviesIndexPage extends Component {

    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        // console.log('mounted, make api call for movies')
        this.getMovies();
    }

    getMovies() {
        // make fetch call
        // then set state with data from api call
        this.setState({movies: [
            {
                _id: 123,
                name: 'Thor'
            },
            {
                _id: 789,
                name: 'Star Wars'
            },
            {
                _id: 456,
                name: 'Coco'
            },
        ]})
    }


    render() {
        // console.log('\n\n ---')
        // console.log('MOVIE INDEX > this.state = ', this.state)
        // console.log('---\n\n')
        if (this.state.movies.length === 0) {
            return (<div>Loading</div>)
        } else {
            return (
                <div>
                    <h1>Movie List Here</h1>
                    
                    {this.state.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                </div>
            );
        }

        
    }
}

export default MoviesIndexPage;
