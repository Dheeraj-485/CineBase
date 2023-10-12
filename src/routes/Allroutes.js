import{Routes,Route} from "react-router-dom"
import { Movielist,MovieDetail,Search,Pagenotfound } from "../pages"
import React from 'react'

const Allroutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path="" element={<Movielist apiPath="movie/now_playing" title="Home"/>}/>
        <Route path="movie/:id" element={<MovieDetail />}/>
        <Route path="movies/popular" element={<Movielist apiPath="movie/popular" title="popular"/>}/>
        <Route path="movies/top" element={<Movielist apiPath="movie/top_rated" title="Top Rated"/>}/>
        <Route path="movies/upcoming" element={<Movielist apiPath="movie/upcoming" title="Upcoming"/>}/>
        <Route path="search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<Pagenotfound  />}/>
    </Routes>
    </div>
    
    
  )
}

export default Allroutes