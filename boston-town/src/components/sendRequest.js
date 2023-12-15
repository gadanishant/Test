// Import the axios library for making HTTP requests
import axios from 'axios';


// Function to send HTTP requests
const sendRequest = (path, data, method = 'POST', headers) => {
    console.log("sendRequest: path => ", path);
    console.log("sendRequest: data => ", data);
    // Check the HTTP method and make the corresponding request
    if (method === 'POST') {
        // Make a POST request with provided path, data, and headers
        return axios.post(path, data, { headers });
    
    } else if (method === 'PUT') {
        // Make a PUT request with provided path, data, and headers
        return axios.put(path, data, { headers });
    } else {
        // Make a GET request with the provided path
        return axios.get(path);
    }
};
// Export the sendRequest function to be used in other modules
export default sendRequest;