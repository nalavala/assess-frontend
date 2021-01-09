import axios from "axios";

export const POST = (url, requestBody, successCallback, failureCallback, options = {}, callbackData = {}) => {
    console.log("post call to " + JSON.stringify(requestBody));
    console.log("post call to " + url);
    axios.post(url, requestBody, options)
        .then((response) => {
            console.log(response);
            successCallback(response.data, callbackData)
        })
        .catch((error) => {
            console.log("erorr : " + JSON.stringify(error.response));
            failureCallback(error.response);
        })
};

export const GET = (url, successCallback, failureCallback, options = {}, callbackData = {}) => {

    console.log(`get ${url}`);
    axios.get(url, options)
        .then(response => {
            console.log(response)
            successCallback(response.data);
        })
        .catch(err => {
            console.log(err)
        })
};


export const PUT = (url, requestBody, successCallback, failureCallback, options = {}, callbackData = {}) => {

    console.log("put call to " + JSON.stringify(requestBody));
    console.log("put call to " + url);
    axios.put(url, requestBody, options)
        .then((response) => {
            console.log(response);
            successCallback(response.data, callbackData)
        })
        .catch((error) => {
            console.log("erorr : " + JSON.stringify(error.response));
            failureCallback(error.response);
        })
};



