import axios from 'axios';

const sendRequest = (path, data, method = 'POST', headers) => {
    console.log("sendRequest: path => ", path);
    console.log("sendRequest: data => ", data);
    if (method === 'POST') {
        return axios.post(path, data, { headers });
    } else {
        return axios.get(path);
    }
};

export default sendRequest;