import React, { useEffect, useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types';


function Movie({ id, title, summary, poster, year, genres }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setshowButton] = useState(false);
    const MovieColymnRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
            if (MovieColymnRef.current) {
                setshowButton(MovieColymnRef.current.scrollHeight > MovieColymnRef.current.clientHeight)
            }
        }
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
    }, []);

    const togle = () => {
        setIsExpanded(!isExpanded);
    };

    // const [rangeValue, SetRangeValue] = useState(2000);
    // const [displayYear, SetDisplayYear] = useState("2000");


    // useEffect(() => {
    //     const NewYear = parseInt(rangeValue, 10);
    //     const Newrange = YearsFilms.find(range => NewYear < range.maxYear);
    //     if (Newrange) {
    //         SetDisplayText(Newrange.text)
    //     }
    // }, [rangeValue]);

    return (<div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className={`movie_column${isExpanded ? '_expanded' : ''}`} key={Movie.id} ref={MovieColymnRef} >

            <h2 className="movie_title">{title}</h2>
            <h4 className="movie_year">{year}</h4>
            <ul className="genres">
                {genres.map((genre, index) => { return <li key={index} className="genre_genre">{genre}</li> })}
            </ul>
            {showButton && <FaCaretDown className="button" onClick={togle} tabindex="0" />}
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