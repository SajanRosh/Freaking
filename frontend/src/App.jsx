import './App.css';
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const url = "http://localhost:5157/weatherforecast";
  useEffect(() =>{
    axios.get(url).then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <>

    </>
  );
}

export default App;
