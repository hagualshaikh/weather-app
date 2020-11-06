
import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
// const API_KEY= "e36ed364400282e43250b6c4c0274d44";
const API_KEY = "3069360e278940b9cb3a637bceca4515";
class  App extends Component {

    state = {
      id :"",
       temperature: "",
       city:"",
       country:"",
       humidity: "",
       description:"",
       icon:"",
       error:""
     };
  

getWeather = async (e) => {
e.preventDefault();
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;
console.log(city,country) ;
const api = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
// const api = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
// );
const data = await api.json();
console.log(data);
 (city && country)? 
  this.setState({
    id:data.id,
    temperature: data.main.temp,
       city:data.name,
       country:data.sys.country,
       humidity: data.main.humidity,
       description:data.weather[0].description,
       icon:data.weather[0].icon,
       error:""
       }): 
  this.setState({
    id:"",
    temperature: "",
       city:"",
       country:"",
       humidity: "",
       description:"",
       icon:"",
       error:"Pleace Enter Data"
       })

}
  render() {
    return (
      <div className="wrapper">
      <div className="form-containter">
         <Form getWeather = {this.getWeather}/>
      <Weather  
      id= {this.state.id}
      temperature= {this.state.temperature}
      city= {this.state.city}
       country= {this.state.country}
        humidity= {this.state.humidity}
         description= {this.state.description}
          icon= {this.state.icon}
       error = {this.state.error}
       />
      </div>
     
      </div>
    );
  }
}



export default App;
