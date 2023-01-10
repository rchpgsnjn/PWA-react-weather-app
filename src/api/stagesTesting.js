import axios from 'axios';


export const stagesTesting = () => {
    const config = {
        method: 'get',
        url: 'http://app.deepdata.loc:8002/api/stages/',
        headers: { 
          //Change token value in .env file
          'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
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
