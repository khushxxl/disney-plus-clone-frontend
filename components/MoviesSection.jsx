import React from 'react'
import MovieBox from './MovieBox'

const MoviesSection = ({ results }) => {
  console.log(results)
  return (
    <div className="m-10">
      <p className="text-white hover:text-blue-500 text-xl cursor-pointer ml-12">
        Recommended For You
      </p>

      <div className="flex overflow-scroll scrollbar-hide">
        {results.fetchTRENDING.results.map((data) => {
          return (
            <div key={data.backdrop_path} className="space-x-20">
              <MovieBox
                key={data.backdrop_path}
                title={data.title || data.name}
                desc={data.overview}
                backdrop_path={data.backdrop_path}
                poster_path={data.poster_path}
              />
            </div>
          )
        })}
      </div>

      <p className="text-white hover:text-blue-500 text-xl cursor-pointer ml-12">
        Top Rated Movies
      </p>

      <div className="flex overflow-scroll scrollbar-hide">
        {results.fetchTopRated.results.map((data) => {
          return (
            <div key={data.backdrop_path} className="space-x-20">
              <MovieBox
                key={data.backdrop_path}
                title={data.title || data.name}
                desc={data.overview}
                backdrop_path={data.backdrop_path}
                poster_path={data.poster_path}
              />
            </div>
          )
        })}
      </div>

      <p className="text-white hover:text-blue-500 text-xl cursor-pointer ml-12">
        New Horror Releases
      </p>

      <div className="flex overflow-scroll scrollbar-hide">
        {results.fetchHORROR.results.map((data) => {
          return (
            <div key={data.backdrop_path} className="space-x-20">
              <MovieBox
                key={data.backdrop_path}
                title={data.title || data.name}
                desc={data.overview}
                backdrop_path={data.backdrop_path}
                poster_path={data.poster_path}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MoviesSection
