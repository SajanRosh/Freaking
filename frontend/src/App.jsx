import './App.css';
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const apiurl = "https://freakingrollins-emgagta0fcbfe6fh.canadacentral-01.azurewebsites.net"
  useEffect(() =>{
    axios.get(`${apiurl}/weatherforecast`).then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <>

    </>
  );
}

export default App;
