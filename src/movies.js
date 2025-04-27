import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types';

function Movie({ id, title, summary, poster, year, genres }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const togle = () => {
        setIsExpanded(!isExpanded);
    };
    return (<div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className={`movie_column${isExpanded ? '_expanded' : ''}`}>
            <h2 className="movie_title">{title}</h2>
            <h4 className="movie_year">{year}</h4>
            <ul className="genres">
                {genres.map((genre, index) => { return <li key={index} className="genre_genre">{genre}</li> })}
            </ul>
            <FaCaretDown className="button" onClick={togle} />
            <p className="movie_summary">{summary}</p>

        </div>
    </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;