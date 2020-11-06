import React from 'react'

const Weather = (props) =>{
      return(
            <div className="info">
              {
                     props.id && < p className ="info_key" > id :<span className="info_value">  {props.id}</span></p>
            }
            {
                     props.temperature && < p className ="info_key" > temperature :<span className="info_value">  {props.temperature}</span></p>
            }
               {
                     props.city && < p className ="info_key"> Ville :<span className="info_value">{props.city}</span></p>
            }
               {
                     props.country && < p className ="info_key"> pays :<span className="info_value"> {props.country}</span></p>
            }
               {
                     props.humidity && < p className ="info_key"> humidité :<span className="info_value"> {props.humidity}</span></p>
            }
               {
                     props.description && < p className ="info_key"> description :<span className="info_value">{props.description}</span></p>
            }
            {
                     props.icon && < p className ="info_key"> icon :<span className="info_value">{props.icon}</span></p>
            }
               {
                     props.error && < p className ="info_key"> error :   <span calssName="info_value">{props.error}  </span></p>
            }
             </div>
            
                
      
      )
}
export default Weather;