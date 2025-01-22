import commonAPI from "./commonapi"
import SERVERURL from "./serverURL"
import { Axios } from "axios"


// saveVideoAPI - post http request, add component
export const saveVideoAPI = async(videoDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/uploadVideos`, videoDetails)
}

// getAllVideosAPI - get method,called view component, when component displayed in browser inside its useEffect hook

export const getAllVideosAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI - POST http method to http://localhost:3000/history called by VideoCard while when we click on video
export const saveHistoryAPI = async(historyDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/history`, historyDetails)
}

// getAllHistoryAPI - get http method to http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}
