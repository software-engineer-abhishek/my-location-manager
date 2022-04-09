import axios from "axios";

const restaurantUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const options = {
  method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '49504965f2msh26a7aaea088f25ap1f0e87jsnce450b0e3829'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getRestaurantsDetail = async () => {

    try {

        const {data : {data}} = await axios.get(restaurantUrl, options)
        return data;
    } catch (error) {
        console.log(error)
        
    }

}