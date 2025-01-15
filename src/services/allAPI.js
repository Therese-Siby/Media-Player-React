import commonAPI from "./commonapi"
import SERVERURL from "./serverURL"



// saveVideoAPI - post http request, add component
export const saveVideoAPI = async(videoDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/uploadVideos`, videoDetails)
}

