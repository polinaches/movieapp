import React from "react";
import PropTypes from 'prop-types';

function Movies({ id, year, title, summary, poster }) {
    return <h1></h1>
}

Movies.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};

export default Movies;