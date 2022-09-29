import React from 'react';
const Weather = (props) => {
    return (
        <div className='info'>
            {
                props.City && <p className='info_key'>City :<span className='info_value'>{props.city}</span></p>
            }
            {
                props.tempreture && <p className='info_key'>tempreture : <span className='info_value'>{props.tempreture}</span></p>
            }
            {
                props.country && <p className='info_key'>Country : <span className='info_value'>{props.country}</span></p>
            }
            {
                props.humidity && <p className='info_key'>humidity :<span className='info_value'>{props.humidity}</span> </p>
            }
            {
                props.describtion && <p className='info_key'>describtion : <span className='info_value'>{props.describtion}</span></p>
            }
            {
                props.error&& <p className='info_key'>Error : <span className='info_value'>{props.error}</span></p>
            }

        </div>
    )
}

export default Weather