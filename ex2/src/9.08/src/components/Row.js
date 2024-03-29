import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css";

/* App.js 에 있는 정보들을 porps 로 내려받는다 . 필요한 영화 정보들을 먼저 받아오기 */
function Row({ isLargeRow, title, id, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        fetchMovieData();
    },[]);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request',request);
        setMovies(request.data.results);
    };

  return (
  <section className='row'>
    <h2>{title}</h2>
    <div className='slider'>
    <div className='slider__arrow-left'>
        <span 
        className='arrow'
        onClick={ () => {
            document.getElementById(id).scrollLeft -= window.innerWidth -80;
        }}>
            {"<"}
            </span>
    </div>

    <div id={id} className='row__posters'>
    {movies.map((movie) => (
        <img
            key={movie.id}
            style={{ padding: "25px 0" }}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt= {movie.name}
               
            />
    ))}
    </div>

    <div className='slider__arrow-right'>
        <span 
        className='arrow'
        onClick={() => {
            document.getElementById(id).scrollLeft +=window.innerWidth -80;
        }}>
            {">"}
        </span>
    </div>
    </div>
  </section>
  )
}

export default Row;