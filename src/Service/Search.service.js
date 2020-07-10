import axios from 'axios';

async function  getServiceTrainDetails(search) {
    
    return await axios({
        "method":"POST",
        "url":"https://trains.p.rapidapi.com/",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"trains.p.rapidapi.com",
        "x-rapidapi-key":"b4d2b6d79fmshfdc3f32bb4be334p121abfjsnfca5dd58bc31",
        "accept":"application/json",
        "useQueryString":true
        },"data":{
        "search": search
        }
        })
}

export default getServiceTrainDetails;