import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
  const [deleteResponseFromCategory,setDeleteResponseFromCategory] =  useState("")
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
          <View deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome = {addResponseFromHome}/>
        </div>
        <div className="col-lg-6">
          <Category setdeleteVideoResponseFromVideoCard = {setDeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home
