import React, { useState } from "react";
import axios from "axios";
import Movie from "./movies";
import "./app.css"
import "./movie.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    rangeValue: 2000
  };


  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  };


  // const SetDisplayText = (event) => {
  //   const NewYear = parseInt(event.target.value, 10);
  //   SetRangeValue(NewYear);
  //   // this.setState({ rangeValue: NewYear }, () => {
  //   //     this.updateDisplayYear();
  //   // })
  // }
  // updateDisplayYear = () => {
  //   const { rangeValue } = this.state;
  //   const Newrange = this.YearsFilms.find(range => NewYear < range.maxYear);
  //   if (Newrange) {
  //     this.SetState
  //   }
  // }
  // const YearsFilms = [
  //   { maxYear: 1971, text: "Классика (до 1970)" },
  //   { maxYear: 1991, text: "Золотая эра (70–90-е)" },
  //   { maxYear: 2001, text: "Новый век (2000-е) " },
  //   { maxYear: 2026, text: "Современность (2000+)" }
  // ];

  render() {
    const { isLoading, movies, rangeValue } = this.state;
    return (
      <div className="app-container">
        <section className="container">{isLoading ? (
          <h1><div className="loader">
            <span className="loader_text">Подождите...
            </span>
          </div></h1>) : movies.map(movie => {
            return (
              <div className="movies">
                <Movie key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                // rangeValue={rangeValue} 
                />
              </div>)
          })

        }</section>
        {!isLoading && <section className="filter">
          <h1 className="filters">Фильтры</h1>
          <h4 className="fileter">Год выхода</h4>
          <div className="inputt" id="range"><input type="range" min="1960" max="2025.0" step="1.0" className="fileter" /></div>
          <p>Выбранный год = {rangeValue} </p>
          <span id="year1">1960</span>
          <span id="year2">2025</span>
          <h4 className="fileter">Жанры</h4>
          <div className="genress">
            <div style={{ width: '50%', float: 'left' }}>
              <div><input type="checkbox" className="check" />Ужасы</div>
              <div><input type="checkbox" className="check" />Комедия</div>
              <div><input type="checkbox" className="check" />Музыка</div>
              <div><input type="checkbox" className="check" />Семейный</div>
            </div>
            <div style={{ width: '50%', float: 'left' }}>
              <div><input type="checkbox" className="check" />Драма</div>
              <div><input type="checkbox" className="check" />Мультики</div>
              <div><input type="checkbox" className="check" />Мелодрама</div>
              <div><input type="checkbox" className="check" />Документальный</div>
            </div>
          </div>
          <div className="div_submit"><input type="submit" className="submit" value="Найти" /></div>

        </section>}
      </div>);
  };
};


export default App;
