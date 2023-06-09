import React from 'react'
import Base from '../Base/base'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate=useNavigate();


  const signInHandler=()=>{
      navigate('/signup')
  }
  return (
    <Base>
    <section className='flex min-h-screen flex-col space-y-4 items-center justify-center'>

    <h1 className='text-4xl font-bold mt-4'>Welcome to Tuty CRM</h1>
    <button className='bg-green-600 rounded-lg p-3 mt-8 ' onClick={signInHandler}>please sign in to continue</button>
    </section>
    </Base>
  )
}

export default Landing