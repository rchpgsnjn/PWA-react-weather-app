import axios from 'axios';


export const stagesTesting = () => {
    const config = {
        method: 'get',
        url: 'http://localhost:8002/api/stages/',
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW1vLm9wZXJhdG9yQGRlZXBkYXRhLmNvbSIsIm5iZiI6MTY3MzI1MDk4OSwiaWQiOjEzLCJleHAiOjE2NzMzMzczODksImlhdCI6MTY3MzI1MDk4OX0.U2EcRAym4uiSSJKQCvXdnxW0Nib8gTKRlvmWtmmAZlopcEvz4WIktmigztHSdZLBk3i-8u5HSxqxfya77hXzdA',
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
          'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


}
