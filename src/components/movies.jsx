import React, { Component } from 'react';
import { getMovies } from '../Starter Code/services/fakeMovieService';


class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDelete = movie => {
        console.log(movie);
        const newMovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: newMovies})

    }
    render() {
        if(this.state.movies.length === 0){
            return <p style={{marginTop: '50px'}}>There is no movies in the list.</p>
        }
        return (
            <div>
                <p style={{marginTop: '50px'}}>Showing {this.state.movies.length} movies in database:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td >{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className="btn btn-danger btn-sm"
                                onClick={()=> this.handleDelete(movie)}
                                >Delete</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            </div>
        );
    }
}

export default Movies;