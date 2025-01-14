import React from 'react'
import { useState } from 'react';
import { Button, Modal,FloatingLabel,Form } from 'react-bootstrap';
const Add = () => {

  const [videoDetails, setVideoDetails] = useState({
    caption:"", imgUrl:"", youtubeLink:""
  })
  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
    // steps to create
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      setInvalidYoutubeLink(true)
    }
  }
  return (
    <>
        <div className='d-flex align-items-center'>
       <h5>Upload New Video </h5> 
       <button onClick={handleShow}  className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    {/* Modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Modal Videos!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3' >
          <FloatingLabel controlId="floatingCaption" label="Video Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})}  type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingURL" label="Video Image URL"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})}  type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingLink" label="Video Youtube Link"
        className="mb-3"
      >
        <Form.Control onChange={e=>extractEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
      {
        invalidYoutubeLink && 
        <div className='text-danger fw-bolder'>Invalid Youtube Link</div>
      }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add