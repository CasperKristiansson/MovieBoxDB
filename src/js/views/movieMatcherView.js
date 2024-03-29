import React from "react";
import '../../css/movieMatcher.css';
import TinderCard from 'react-tinder-card';

function MovieMatcherView(props) {
    return (
        <div className="movieMatcher-section">
            <div className="discover ">
                    <h1 className="movie-matcher-title">MovieMatcher™</h1>
                </div>
            <div className='cardContainer'>
                <h5 className="description">Swipe right to add movie to watchlist. Swipe up to add movie to favourites. Swipe down for more information. Swipe left for no.</h5>
                <br />
                {props.topMovies.map(
                    function (movie) {
                        if (movie.poster_path == null || movie.backdrop_path == null ) {
                            props.increaseCounter();
                            return null;
                        } else {
                            return (
                                <TinderCard className="swipe" key={movie.id} onSwipe={(dir) => props.onSwipe(dir, movie)}>
                                    <div id={movie.id} className="card">
                                        <img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} ></img>
                                    </div>
                                </TinderCard>
                            );
                        }
                    }
                )}
                
            </div>
            {props.lastDirection ? <h2 className='infoText'>{props.lastDirection}</h2> : <h2 className='infoText'> </h2>}
        </div>
    );
}

export default MovieMatcherView;
