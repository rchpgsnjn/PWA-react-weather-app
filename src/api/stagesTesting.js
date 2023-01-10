import axios from 'axios';


export const stagesTesting = () => {
    const config = {
        method: 'get',
        url: 'http://127.0.0.1:8002/api/stages/',
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW1vLm9wZXJhdG9yQGRlZXBkYXRhLmNvbSIsIm5iZiI6MTY3MzMzNzcwOCwiaWQiOjEzLCJleHAiOjE2NzM0MjQxMDgsImlhdCI6MTY3MzMzNzcwOH0.K1XJOAXVLSXotl9UqTRSZhLq9377M9jN1WWNGENtlYgXmYCknKX9-Ej-dKaSqys8qV8mSdzDU3KIMwAUdltJ-g'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data._embedded.stages);
      })
      .catch(function (error) {
        console.log(error);
      });


}
