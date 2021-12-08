import React from "react";

function Greet()
{
    let timeofDayColor;
    const dateTime = new Date();
    const hours = dateTime.getHours();
    let timeofDay;
    if(hours<2 || hours>17)
    {
        timeofDay='Evening';
        timeofDayColor = 'turquoise';
    }
    else if(hours>12)
    {
        timeofDay = 'AfterNoon';
        timeofDayColor = 'yellow';
    }
    else{
        timeofDay='Morning';
        timeofDayColor='purple';
    }
    const timeofDayStyle = {
        color: timeofDayColor,
    };
    return (
        <div className='greetingContainer'>
            <p>
               Good <span style={timeofDayStyle}>{timeofDay}</span> 
            </p>
        </div>   
    )
}


export default Greet;