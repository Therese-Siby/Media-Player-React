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
