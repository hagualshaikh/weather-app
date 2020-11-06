import React from 'react'

const Form = (props) =>{
      return(
            <form onSubmit = {props.getWeather}>
                  <input type="text" name="city" placeholder ="ville....." />
                    <input type="text" name="country" placeholder ="pays ....." />
                    <button > Get Weather</button>
            </form>
      )
}
export default Form;