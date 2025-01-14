import React from 'react'
import { Link } from 'react-router-dom'
const History = () => {
  return (
    <div style={{paddingTop:'100px'}}>
          <div className='d-flex justify-content-between container'>
            <h3>Watch History</h3>
            <Link to={'/home'}>Back to Home</Link>
          </div>
          <table className='container my-5 table'>
            <thead>
              <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>TimeStamp</th>
              <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>1</td>
              <td>Caption</td>
              <td>https://www.youtube.com/watch?v=Po3jStA673E</td>
              <td>9/11/2024, 11:53:20 AM, GMT+5:30</td>
              <td><i class="fa-solid fa-trash text-danger"></i></td>
              </tr>
            </tbody>

          </table>
    </div>
  )
}

export default History