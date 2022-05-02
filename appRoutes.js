import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppMovies from './vodComps/appMovies';
import MovieInfo from './vodComps/movieInfo';
import PageNotFound404 from './vodComps/PageNotFound404';



export default function AppRoutes(props) {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<AppMovies />} />
            <Route path='/search/:searchQ' element={<AppMovies />} />
            <Route path='/year/:YYYY' element={<AppMovies />} />
            <Route path="/video/:id" element={<MovieInfo />} />
            <Route path='*' element={<PageNotFound404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
