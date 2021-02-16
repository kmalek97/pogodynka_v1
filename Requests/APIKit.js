import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5';

const request = axios.create({
  baseURL:url,
  timeout: 3000,
})

export default request;















//export const getCity = (city) => {
//axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0dc29c7083613a2117fd359b623e0b9d`)
//.then(function (response) {
//  console.log(response);
//})
//.catch(function (error) {
//  console.log(error);
//});
//}
