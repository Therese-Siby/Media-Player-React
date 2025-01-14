// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music-landing-image.jpg'
import feature1 from '../assets/drums.jpeg'
import feature2 from '../assets/features-notes.jpeg'
import feature3 from '../assets/features-.jpeg'
import { Card, Button } from 'react-bootstrap'
const landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      <div className='row align-items-center'>
        {/* Landing-intro */}
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>
            Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!
          </p>
          <Link to={'/home'} className='btn btn-info'>Get started</Link>
        </div>
        <div className='col'></div>
        {/* Landing-image */}
        <div className='col-lg-6'>
          <img src={LandingImg} className='img-fluid ms-5' alt="" />
        </div>
        {/* Feature session */}
        <div className='my-5'>
          <h3 className='text-center'>Features</h3>
          <div className='row  mt-5'>
            <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feature1} />
                <Card.Body>
                  <Card.Title>Categorize videos</Card.Title>
                  <Card.Text>
                    Users can upload, view and remove the videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feature2} />
                <Card.Body>
                  <Card.Title>Manage Videos</Card.Title>
                  <Card.Text>
                    Users can categorize the videos by drag and drop feature
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feature3} />
                <Card.Body>
                  <Card.Title>Drums</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* last */}
        <div className='my-5 row align-items-center border rounded p-5'>
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple , Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5 fw-bolder'>Play everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa harum error repellat laborum odit temporibus ut aliquid ad deserunt, dolorem qui at consectetur explicabo autem, obcaecati non et maxime iusto?
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5 fw-bolder'>Categorise videos: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa harum error repellat laborum odit temporibus ut aliquid ad deserunt, dolorem qui at consectetur explicabo autem, obcaecati non et maxime iusto?
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5 fw-bolder'>Managing History: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa harum error repellat laborum odit temporibus ut aliquid ad deserunt, dolorem qui at consectetur explicabo autem, obcaecati non et maxime iusto?
            </p>

            </div>
            <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=MYVcNjsiqeYb90go" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          </div>


          
      </div>
    </div>
  )
}

export default landing