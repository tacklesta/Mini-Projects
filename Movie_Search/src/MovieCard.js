import React from 'react';
export default function MovieCard(props)
{
    const {movie} = props;
    return(
        <div>
        <div className="card">
            <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title +' poster'}
            className="card--image"
            />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                    <small>Release Date: {movie.release_date}</small>
                </p>
                <p>
                    <small>Rating: {movie.vote_average}</small>
                </p>
                <p>{movie.overview}</p>
            </div>
        </div>
        </div>
        );
}