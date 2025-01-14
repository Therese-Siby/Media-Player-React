import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'


const View = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }} >
        <Card.Img onClick={handleShow} height={'180px'} variant="top" src="https://moviegalleri.net/wp-content/gallery/leo-tl/thumbs/thumbs_Actor-Vijay-Leo-Trailer-Launch-Poster-HD.jpg" />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            Leo Trailer
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>


      {/* Modal */}
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Leo Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Po3jStA673E?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>

      </Modal>
    </>
  )
}

export default View