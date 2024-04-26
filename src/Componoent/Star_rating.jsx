import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../Style/Style.css';
import { useState } from 'react';
const Star_rating = ({ rating  }) => {
    const [hover, sethover] = useState(0); // setting an inital value to the hover state
    const[ratingNew,setrating]=useState(0); // setting the rating 
    const clicked = (index) => {
        console.log('clicked function', index);
        console.log('value of hover',hover);
        setrating(index);
    }
    const mouseenter = (index) => {
        console.log('mouse Enter function', index);
        sethover(index);
    }
    const onMouseLeave = (index) => {
        console.log('mouse leave', index);
        sethover(0);
    }
    return (<>

        <h1>Star rating section</h1>
        <div className="container1">

            {[...Array(10)].map((_, index) => {
                const starvalue = index + 1;
                return (
                    <div className='starrack' key={starvalue}>     

                        <FaStar size={20} style={{ cursor: 'pointer',backgroundColors: 'yellowgreen' }} onClick={() => clicked(starvalue)} color={(hover||ratingNew) >= starvalue ? "yellow" : 'white  '} onMouseEnter={() => mouseenter(starvalue)} onMouseLeave={() => onMouseLeave(starvalue)} className={() => starvalue <= (hover || ratingNew) ? 'active' : 'inactive'} />
                    </div>
                )
            })}
        </div>
    </>);
}

export default Star_rating;