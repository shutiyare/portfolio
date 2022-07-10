import React, { useState } from 'react'
import About from './About'

function Home() {
  const [name,setName]=useState(false);
  function handle(){
    setName(true)
  }
  return (
    <div>
      <h1>This is home page</h1>
      <h6>in this page we will do :</h6>
      <p>Some great navigations</p>
      <br/>
      <button onClick={handle}>clickMe</button>
    </div>
  )
}
export default Home