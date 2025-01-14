import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      {/* Displaying all categories */}
      <div className='container-fluid mb-3'>
        <div className='border rounded p-3 mb-3'>
          <div className='d-flex justify-content-between'>
            <h5>Category Name</h5>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
          {/* Display categories video */}
          <div className='row mt-2'>
            <div className='col-lg-4'>
              {/* Video Cards */}
            </div>
          </div>
        </div>
      </div>


      
      {/* // Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCaption" label="Category Name" className="mb-3">
            <Form.Control type="text" placeholder="Category Name" />
          </FloatingLabel>
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

export default Category