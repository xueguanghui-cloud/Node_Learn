const axios = require('axios')

axios.get('http://127.0.0.1:3000').then((result) => {
  console.log(result.data);
})

axios.post('http://127.0.0.1:3000').then((result) => {
  console.log(result.data);
})