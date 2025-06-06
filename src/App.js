import React from "react";
import axios from "axios";
import Movie from "./movies";
import "./app.css"
import "./movie.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
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

  render() {
    const { isLoading, movies } = this.state;
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
                  genres={movie.genres} />
              </div>)
          })
        }</section>
        {!isLoading && <section className="filter">
          <h1 className="filters">Фильтры</h1>
          <h4 className="fileter">Год выхода</h4>
          <div className="inputt"><input type="range" className="fileter" /></div>
          <h4 className="fileter">Жанры</h4>
          <div className="genress">
            <div style={{ width: '50%', float: 'left' }}>
              <div><input type="checkbox" className="check" />Комедия</div>
              <div><input type="checkbox" className="check" />Документальный</div>
              <div><input type="checkbox" className="check" />Музыка</div>
              <div><input type="checkbox" className="check" />Ужасы</div>
            </div>
            <div style={{ width: '50%', float: 'left' }}>
              <div><input type="checkbox" className="check" />Мелодрама</div>
              <div><input type="checkbox" className="check" />Драма</div>
              <div><input type="checkbox" className="check" />Мультики</div>
              <div><input type="checkbox" className="check" />Семейный</div>
            </div>
          </div>
          <div className="div_submit"><input type="submit" className="submit" value="Найти" /></div>

        </section>}
      </div>);
  };
};

export default App;
