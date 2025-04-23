import React from "react";
import PropTypes from 'prop-types';

function Movie({ id, title, summary, poster, year }) {
    return <h1>{title}</h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};

export default Movie;