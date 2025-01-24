import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({setDeleteResponseFromCategory}) => {
  const [allCategories, setAllCategories] = useState([])
  const [CategoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getAllCategories()
  }, [])
  const handleSaveCateGory = async () => {
    if (CategoryName) {
      const categoryDetails = { CategoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails);
        console.log(result);
        alert("Category Created")
        getAllCategories()
        handleClose()
      } catch (err) {
        console.log(err);

      }
    }
    else {
      alert("Please provide a category name!!!");
    }
  }
  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }
    } catch (err) {
      console.log(err);

    }
  }
  console.log(allCategories);
  const removeCategory = async (id)=>{
      try {
        await deleteCategoryAPI (id)
        getAllCategories()
      } catch (err) {
       console.log(err);
        
      }
}
const dragOverCategory =(e) =>{
  e.preventDefault()
}

const VideoCardDropOverCategory = async (e, categoryDetails) => {
  console.log("Inside videoCardDropOverCategory");
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails")); // Retrieve video details
  console.log(videoDetails);

  // Update category by adding video to its allVideos
  categoryDetails.allVideos.push(videoDetails);
  console.log(categoryDetails);

  // API call to update the category
  await updateCategoryAPI(categoryDetails);
  getAllCategories();

  // Remove the video from "All Videos"
  const result = await removeVideoAPI(videoDetails?.id);
  setDeleteResponseFromCategory(result);

  // **Force re-fetch updated videos in View**
  window.location.reload(); // or trigger a re-render of the `View` component by updating state
};

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      {/* Displaying all categories */}
      <div className='container-fluid mb-3'>
        {/* Single category */}
        {
          allCategories?.length ?
            allCategories?.map(categoryDetails => (
              <div droppable="true "onDragOver={dragOverCategory} onDrop={e=>VideoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='border rounded p-3 mb-3'>
                <div className='d-flex justify-content-between'>

                  <h5>{categoryDetails?.CategoryName}</h5>
                  <button onClick={()=>removeCategory(categoryDetails?.id)} className="btn">
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

            ))
            :
            <div className='fw-bold text-muted fs-5'>No categories added yet. Please add a new category!</div>
        }
      </div>



      {/* // Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCaption" label="Category Name" className="mb-3">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCateGory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>



  )
}

export default Category