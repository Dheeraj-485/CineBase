import React, { useEffect } from 'react'
import Oops from "../assets/404Image.jpg"
import { NavLink } from 'react-router-dom'
import {Button} from '../components'
import { useTitle } from '../hooks/useTitle'

export const Pagenotfound = () => {
useTitle("Page Not Found!/CineBase")
  
  return (
    <main>
      <section className='flex flex-col justify-center px-2 '>
        <div className='flex flex-col items-center my-4'>
          <h1 className='text-grey-700 font-bold dark:text-white text-7xl my-10'>404, Oops!</h1>
            <div className='max-w-lg'>
          <img className="rounded " src={Oops} alt="Oops! Page not found" />
                
            </div>
              
        </div>
        <div className='flex justify-center my-4'>
          <NavLink to="/">
          <Button>Back to Home</Button>
          </NavLink>
        </div>
      </section>
    </main>
  )
}
