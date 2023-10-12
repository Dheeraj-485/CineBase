import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'

 export const Movielist = ({apiPath,title}) => {
  // const[movies,setmovies]=useState()
const {data : movies}=useFetch(apiPath)
const pagetitle=useTitle(title)

   
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies.map((movie)=>(
           <Card key={movie.id} movie={movie}/>
            
          ))}
         
         
        </div>
      </section>
    </main>
  )
}
