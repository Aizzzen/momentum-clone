import React from 'react';
import {DateContainer} from './DateStyles';

const DateToday = () => {

    let today = new Date();
    let date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate()

    return (
        <DateContainer>
            <p>{date}</p>
        </DateContainer>
    )
}

export default DateToday;