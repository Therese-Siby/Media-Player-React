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


// deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button
export const deleteHistoryAPI = async (id) => {
    return await commonAPI(`DELETE` , `${SERVERURL}/history/${id}`,{})

}

// removeVideoAPI - delete method to http://localhost:3000/home called by videoCard when clicked on delete button
export const removeVideoAPI = async (id) => {
    return await commonAPI(`DELETE` , `${SERVERURL}/uploadVideos/${id}`,{})

}

// saveCategoryAPI - post request  http://localhost:3000/categories called by category component when user click on add btn
// categoryDetails = {categoryName, allVideos}
export const saveCategoryAPI = async(categoryDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/categories`, categoryDetails)
}

// getAllCategoryAPI - get method, called category  component, when component loaded in browser
export const getAllCategoryAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/categories`,{})
}


// deleteCategoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button
export const deleteCategoryAPI = async (id) => {
    return await commonAPI(`DELETE` , `${SERVERURL}/categories/${id}`,{})

}

