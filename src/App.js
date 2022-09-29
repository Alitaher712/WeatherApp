import React,{ Component } from 'react';
import Form from './Component/Form';
import Weather from './Component/Weather';
class App extends Component{
  state={
    tempreture:'',
    city:'',
    country:'',
    humidity:'',
    describtion:'',
    error:''
  }
  getWeater=async(e)=>{
    e.preventDefault();
    const Api_key="bf712372d4a116d14d1fe895eb0906d6";
    //https://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
    console.log('Weather');
    const city=e.target.elements.City.value;
    const country=e.target.elements.Country.value;
  //  console.log(city,country);
    const API=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=bf712372d4a116d14d1fe895eb0906d6`);
    const data = await API.json();
   // console.log(data);
  
    if(city&&country){
    this.setState({
      tempreture:data.main.temp-273,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      describtion:data.weather[0].description,
      error:''
    })
  }
  else{
    if(!city&&country){
      this.setState({
        tempreture:'',
        city:'',
        country:'',
        humidity:'',
        describtion:'',
        error:'Please Enter City'
      })
    }
    else if(!country&&city){
      this.setState({
        tempreture:'',
        city:'',
        country:'',
        humidity:'',
        describtion:'',
        error:'Please Enter Country'
      })
    }
    else{
      this.setState({
        tempreture:'',
        city:'',
        country:'',
        humidity:'',
        describtion:'',
        error:'Please Enter City and Country '
      })
    }
  }
  }
  render(){
    return(
      <div className='wrapper'>
        <div className='form-container'>
        <Form get_weather={this.getWeater}/>
        <Weather
        tempreture={(int)(this.state.tempreture)}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        describtion={this.state.describtion}
        error={this.state.error}        
        />
        </div>
      </div>
    )
  }
}
export default App;
