import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
const [addResponseFromHome, setAddResponseFromHome] = useState("")

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className='d-flex justify-content-between container mb-5'>
        <Add setAddResponseFromHome = {setAddResponseFromHome}/>
        <Link to={'/history'}>Watch history</Link>
      </div>
      <div className='container-fluid my-5 row'>
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View addResponseFromHome = {addResponseFromHome}/>
        </div>
        <div className="col-lg-6">
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Home
