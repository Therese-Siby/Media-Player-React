import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({ displayData,setdeleteVideoResponseFromVideoCard }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // store history in json
    const { caption, youtubeLink } = displayData
    const sysDateTime = new Date(); 
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US', { timeZoneName: 'short' }));    
    const timeStamp =sysDateTime.toLocaleString('en-US', { timeZoneName: 'short' });
    const historyDetails ={caption,youtubeLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }

  }
    const deleteVideo = async (id) => {
      try{
        const result = await removeVideoAPI(id)
        setdeleteVideoResponseFromVideoCard(result)
      }catch(err){
        console.log(err);
        
      }
    }

  return (
    <>
      <Card style={{ width: '13rem' }}>
        {/* Card Image */}
        <Card.Img
          onClick={handleShow}
          height="180px"
          variant="top"
          src={displayData?.imgUrl}
          alt={displayData?.caption || 'Video Thumbnail'}
        />
        <Card.Body>
          {/* Card Text */}
          <Card.Text className="d-flex justify-content-between align-items-center">
            <span style={{ color: 'white' }}>{displayData?.caption || 'No Title'}</span>
            <button onClick={()=>deleteVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption || 'Video Player'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="560" height="315" src={`${displayData?.youtubeLink}?autoplay=1`} title="Leo Trailer"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
