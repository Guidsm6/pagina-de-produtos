import React from 'react'
import Header from './components/header'
import Form from './components/form'

export default function Home() {
  return (
    <div className='bg-zinc-600 w-screen h-screen flex-col flex'>
      <Header/>
      <main className=' flex justify-center '>
        <Form/>
      </main>

    </div>
  )
}
