import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllHistoryAPI,deleteHistoryAPI } from '../services/allAPI';

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([]);

  useEffect(() => {
    getAllHistory();
  }, []);

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if (result.status >= 200 && result.status < 300) {
        // Update state with the fetched history
        setAllVideoHistory(result.data);
      }
    } catch (err) {
      console.error('Error fetching history:', err);
    }
  };

  const removeHistory = async (id) => {
    try{
      await deleteHistoryAPI(id)
      getAllHistory()
    }catch(err){
      console.log(err);
      
    }
  }



  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="d-flex justify-content-between container">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
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
          {allVideoHistory?.length > 0 ? (
            allVideoHistory.map((videoDetails, index) => (
              <tr key={videoDetails?.id || index}>
                <td>{index + 1}</td>
                <td>{videoDetails?.caption}</td>
                <td>
                  <a href={videoDetails?.youtubeLink} target="_blank" rel="noopener noreferrer">
                    {videoDetails?.youtubeLink}
                  </a>
                </td>
                <td>{new Date(videoDetails?.timeStamp).toLocaleString()}</td>
                <td>
                  <button onClick={()=> removeHistory(videoDetails?.id)} className="btn">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="fw-bolder text-danger text-center">
                You didn't watch any videos yet!!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
