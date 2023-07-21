import { useState,useEffect } from 'react';
const classes = require('../styles/typing_room.module.css')

const typing_room =  () => {
    const [question,setQuestion] = useState("feting question...");

    useEffect(()=>{
        document.addEventListener('keydown',(e)=>{
            alert(e.key);
        })
    },[])

    return (<div className={classes['typepage']}>
        <h1 className='text-white font-extrabold text-4xl'>{question}</h1>
    </div>)
} 

export default typing_room;