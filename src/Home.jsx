import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

import './Home.css'
function Home() {
  const [city,setCity]=useState('');
  const [weatherInfo,setWeatherInfo]=useState(null);



  function getWeather(){
    const apiKey='dd94f859a0e52d6e4767fddf735f04a7';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let MT=Math.round(data.main.temp);
      let FL=Math.round(data.main.feels_like);

      const weather={
        location:`Weather in ${data.name}`,
        temperature:`${MT} °C`,
feelsLike:`${FL} °C`,
humidity:`${data.main.humidity} %`,
wind:`${data.wind.speed} km/h`,
condition:`${data.weather[0].description}`,
      };
      setWeatherInfo(weather);
    })

    .catch((error)=>{
      console.error(error);
    });
  }
  return (
    
    <div className="screen">

  
    <div className='box'>
      <div className="wimg">
        <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png" alt="" height={50}  />
      </div>
        <div className="search">
        <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{ height: "80px" }}>
        <MDBCol><MDBInput label='City name' type='text' id='formBlack' className='text-secondary' style={{width:265}} value={city} onChange={(e)=>setCity(e.target.value)} /></MDBCol>
        <MDBCol style={{width:15}}></MDBCol>
        <MDBCol>
        <MDBBtn className='sea' style={{color:'white',backgroundColor:'lightblue',outlineColor:'white',borderRadius:'25%'}} onClick={getWeather}><MDBIcon fas icon="search" /></MDBBtn></MDBCol>
        </div>
        

        <div className="info">
      {weatherInfo && (
          <div className="weather-info">
            <h3 style={{textAlign:'center'}}>{weatherInfo.location}</h3>
            <br />
            <MDBTable borderless>

<MDBTableBody>
  <tr>
    
    <td>
    <h1 style={{fontSize:45}}><MDBIcon fas icon="thermometer-quarter" /> {weatherInfo.temperature}</h1>
    
    </td>
    <td>
    <p><MDBIcon fas icon="water" /> humidity {weatherInfo.humidity}</p>
    <p><MDBIcon fas icon="wind" /> wind {weatherInfo.wind}</p>
    <p><MDBIcon fas icon="cloud" /> {weatherInfo.condition}</p>
    
    </td>
   
  </tr>


</MDBTableBody>
</MDBTable>



           
            

            
          </div>
        )}
      </div>
     


      </div>
        
        
       
       
    </div>
    </div>
  )
}

export default Home