import './App.css';
import { useState } from 'react';
import axios from "./axios"
function App() {
  const[username,setUsername] = useState("");
  const[street,setStreet] = useState("");
  const[city,setCity] = useState("");
  const[state,setState] = useState("");
  const[country,setCountry] = useState("");
  const[zip,setZip] = useState("");

  function submit(e){
    e.preventDefault()
  axios.post("/user",{
    username:username
  }).then((result)=>{
    console.log(result);
  }).catch(e=>{
    console.log(e);
  })
  axios.post("/address",{
    user_id:username,
    street:street,
    city:city,
    state:state,
    country:country,
    zip:zip
  }).then((result)=>{
    console.log(result);
  }).catch(e=>{
    console.log(e);
  })
  setUsername("")
  setStreet("")
  setState("")
  setCity("")
  setZip("")
  setCountry("")
  }
  return (
    <div className="app">
      <form onSubmit={submit}>
      <h1>Sign Up</h1>
        <input type="text" value={username} onChange={e=>setUsername(e.target.value)}  placeholder='Enter your username'/>
        <input type="text" value={street} onChange={e=>setStreet(e.target.value)} placeholder='Enter your street'/>
        <input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder='Enter your city'/>
        <input type="text" value={state} onChange={e=>setState(e.target.value)} placeholder='Enter your state'/>
        <input type="text" value={country} onChange={e=>setCountry(e.target.value)} placeholder='Enter your country'/>
        <input type="text" value={zip} onChange={e=>setZip(e.target.value)} placeholder='Enter your zip code'/>
        <input type="submit" className='button'/>
      </form>
    </div>
  );
}

export default App;
