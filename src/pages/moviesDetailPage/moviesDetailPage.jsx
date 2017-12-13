import React, { Component } from 'react';

class MoviesDetailPage extends Component {

    constructor(props) {
        console.log('movieDetails > constructor > props =', props)
        super()
        this.state = {
            id: props.id,
            movie: {}
        }
    }

    componentDidMount() {
        console.log("mounted")
        this.getMovie();
    }

    getMovie() {
        console.log('making api call for movie')
        // console.log('this.state.id =', this.state.id)
        // fetch('/api/movies/' + this.state.id).then(movie=>this.setState({movie: movie}))
        
        // simulating a slow api request with settimeout
        setTimeout(() => {
            console.log('GOT DATA!!! UPDATEING STATE WITH DATA')
            this.setState({
                movie: {
                    _id: 123,
                    name: 'Thor'
                }
            })
        }, 3000)
    }

    render() {
        if (this.state.movie._id) {
            return (
                <div>
                    MoviesDetailPage goes here <br />
                    <div>

                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading
                </div>
            );
        }
        
    }
}

export default MoviesDetailPage;
