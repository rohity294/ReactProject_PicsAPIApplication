import Axios from 'axios';

export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID fod7fcRfmrqZLRrRqxDwMBnAZhndyaVn4WgNaIktZFQ'
        }
    }
);