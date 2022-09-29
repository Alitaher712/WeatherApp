import React, {Component} from 'react';
const Form=(props)=>{
        return(
            <form onSubmit={props.get_weather}>
                <input type="text" name="City" placeholder='City......'/>
                <input type="text" name="Country" placeholder='Contry'/>
                <button>Get Whether</button>
            </form>
        )
}

export default Form