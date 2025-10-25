import './App.css';
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const url = "freakingrollins-emgagta0fcbfe6fh.canadacentral-01.azurewebsites.net/";
  useEffect(() =>{
    axios.get(`${url}/weatherforecast`).then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <>

    </>
  );
}

export default App;
